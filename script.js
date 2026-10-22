const applianceList = document.getElementById('applianceList');
const template = document.getElementById('applianceTemplate');
const rateInput = document.getElementById('rateInput');
const daysInput = document.getElementById('daysInput');
const validationMessage = document.getElementById('validationMessage');
let nextId = 1;

function addAppliance(name = `Appliance ${nextId}`, watts = 1000, hours = 2) {
  if (applianceList.children.length >= 20) {
    validationMessage.textContent = 'You can analyze up to 20 appliances at a time.';
    return;
  }
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector('.appliance-card');
  card.dataset.id = String(nextId);
  card.querySelector('.appliance-number').textContent = applianceList.children.length + 1;
  card.querySelector('.appliance-name').value = name;
  card.querySelector('.power-input').value = watts;
  card.querySelector('.hours-input').value = hours;
  card.querySelector('.remove-button').addEventListener('click', () => {
    card.remove();
    renumberAppliances();
    calculate();
  });
  card.querySelectorAll('input').forEach(input => input.addEventListener('input', () => {
    validateCard(card);
    calculate();
  }));
  applianceList.appendChild(fragment);
  nextId++;
  renumberAppliances();
  calculate();
}

function renumberAppliances() {
  [...applianceList.children].forEach((card, index) => {
    card.querySelector('.appliance-number').textContent = index + 1;
  });
  document.getElementById('applianceCount').textContent = applianceList.children.length;
}

function readAppliances() {
  return [...applianceList.children].map((card, index) => {
    const name = card.querySelector('.appliance-name').value.trim() || `Appliance ${index + 1}`;
    const powerRaw = card.querySelector('.power-input').value;
    const hoursRaw = card.querySelector('.hours-input').value;
    const power = Number(powerRaw);
    const hours = Number(hoursRaw);
    const valid = powerRaw !== '' && hoursRaw !== '' && Number.isFinite(power) &&
      Number.isFinite(hours) && power > 0 && power <= 100000 && hours >= 0 && hours <= 24;
    return { card, name, power, hours, valid, energy: valid ? power * hours / 1000 : 0 };
  });
}

function validateCard(card) {
  const p = card.querySelector('.power-input').value;
  const h = card.querySelector('.hours-input').value;
  const valid = p !== '' && h !== '' && Number.isFinite(Number(p)) && Number.isFinite(Number(h)) &&
    Number(p) > 0 && Number(p) <= 100000 && Number(h) >= 0 && Number(h) <= 24;
  const badge = card.querySelector('.valid-badge');
  badge.textContent = valid ? 'Ready' : 'Check values';
  badge.classList.toggle('invalid', !valid);
  return valid;
}

function levelFor(energy) {
  if (energy >= 2) return { label: 'HIGH', className: 'level-high' };
  if (energy >= 1) return { label: 'MEDIUM', className: 'level-medium' };
  return { label: 'LOW', className: 'level-low' };
}

function money(value) {
  return value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function num(value) {
  return value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calculate() {
  validationMessage.textContent = '';
  const rate = Number(rateInput.value);
  const days = Number(daysInput.value);
  const rateValid = rateInput.value !== '' && Number.isFinite(rate) && rate >= 0;
  const daysValid = daysInput.value !== '' && Number.isInteger(days) && days >= 1 && days <= 31;
  rateInput.setAttribute('aria-invalid', String(!rateValid));
  daysInput.setAttribute('aria-invalid', String(!daysValid));
  const appliances = readAppliances();
  appliances.forEach(a => validateCard(a.card));
  const validAppliances = appliances.filter(a => a.valid);
  const dailyTotal = validAppliances.reduce((sum, a) => sum + a.energy, 0);
  const monthlyTotal = dailyTotal * (daysValid ? days : 30);
  const bill = monthlyTotal * (rateValid ? rate : 0);

  document.getElementById('dailyEnergy').textContent = num(dailyTotal);
  document.getElementById('monthlyEnergy').textContent = num(monthlyTotal);
  document.getElementById('monthlyBill').textContent = money(bill);
  document.getElementById('periodLabel').textContent = `Based on ${daysValid ? days : 30} days`;

  const body = document.getElementById('breakdownBody');
  body.innerHTML = '';
  validAppliances.forEach((a, index) => {
    const monthlyEnergy = a.energy * (daysValid ? days : 30);
    const monthlyCost = monthlyEnergy * (rateValid ? rate : 0);
    const level = levelFor(a.energy);
    const tr = document.createElement('tr');
    const cells = [
      a.name, `${num(a.power)} W`, `${num(a.hours)} h`, `${num(a.energy)} kWh`,
      `${num(monthlyEnergy)} kWh`, `₹${money(monthlyCost)}`
    ];
    cells.forEach((value, i) => {
      const td = document.createElement('td');
      td.textContent = value;
      if (i === 0) td.title = value;
      tr.appendChild(td);
    });
    const levelTd = document.createElement('td');
    const badge = document.createElement('span');
    badge.className = `level-tag ${level.className}`;
    badge.textContent = level.label;
    levelTd.appendChild(badge);
    tr.appendChild(levelTd);
    body.appendChild(tr);
  });

  const empty = document.getElementById('emptyState');
  empty.classList.toggle('hidden', validAppliances.length > 0);
  body.parentElement.classList.toggle('hidden', validAppliances.length === 0);

  const leader = validAppliances.reduce((best, a) => !best || a.energy > best.energy ? a : best, null);
  document.getElementById('highestName').textContent = leader ? leader.name : 'No valid appliance';
  document.getElementById('highestPower').textContent = leader ? `${num(leader.power)} W · ${num(leader.hours)} h/day` : 'Enter valid appliance values';
  document.getElementById('highestEnergy').textContent = leader ? num(leader.energy) : '0.00';

  const title = document.getElementById('insightTitle');
  const text = document.getElementById('insightText');
  if (!validAppliances.length) {
    title.textContent = 'Add an appliance to begin';
    text.textContent = 'Enter a positive power rating and between 0 and 24 hours of daily usage.';
  } else if (leader.energy >= 2) {
    title.textContent = 'Start with your highest consumer';
    text.textContent = `${leader.name} uses ${num(leader.energy)} kWh per day. Reducing unnecessary usage can lower your estimated bill.`;
  } else {
    title.textContent = 'Your usage looks relatively low';
    text.textContent = 'Keep reviewing your appliance habits and compare the estimates as you add more devices.';
  }
  if (!rateValid) validationMessage.textContent = 'Enter a valid electricity rate of ₹0 or more.';
  else if (!daysValid) validationMessage.textContent = 'Monthly period must be a whole number from 1 to 31 days.';
  else if (appliances.some(a => !a.valid)) validationMessage.textContent = 'Some appliances have invalid values and are excluded from the calculation.';
}

document.getElementById('addAppliance').addEventListener('click', () => addAppliance());
document.getElementById('analyzeButton').addEventListener('click', () => {
  calculate();
  document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
rateInput.addEventListener('input', calculate);
daysInput.addEventListener('input', calculate);
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('menuToggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.remove('open');
}));

// Sample values match the project's C++ calculation example.
addAppliance('Appliance 1', 1500, 2);
addAppliance('Appliance 2', 500, 2);
