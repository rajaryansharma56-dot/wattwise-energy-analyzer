# ⚡ WattWise Energy Analyzer

### Smart Energy Insights. Clearer Electricity Costs.

WattWise is a responsive, browser-based energy analytics dashboard that helps users estimate appliance electricity consumption, understand monthly energy costs, and identify their highest-consuming appliances.

🌐 **Live Demo:** [Launch WattWise](https://rajaryansharma56-dot.github.io/wattwise-energy-analyzer/)

---

## 📌 Overview

Understanding electricity consumption starts with knowing how much energy your appliances use.

WattWise transforms appliance power ratings and daily usage hours into clear energy and cost estimates. Its interactive dashboard lets users experiment with different appliances, electricity rates, and usage patterns—all without installing software or creating an account.

## ✨ Key Features

- **Interactive Appliance Management** — Add, rename, and remove appliances.
- **Energy Consumption Analysis** — Calculate daily and monthly energy usage in kilowatt-hours (kWh).
- **Electricity Cost Estimation** — Estimate bills using a configurable electricity rate and calculation period.
- **Highest-Consumption Detection** — Identify the appliance contributing the most to total energy usage.
- **Appliance-Level Breakdown** — Compare individual energy consumption and estimated costs.
- **Consumption Insights** — Categorize usage using simple, configurable project thresholds.
- **Responsive Dashboard** — Designed for desktop and mobile screens.
- **Instant Browser-Based Results** — Calculations run locally in the browser without a backend or login.

## 🖥️ Live Demo

**Try it here:**  
👉 https://rajaryansharma56-dot.github.io/wattwise-energy-analyzer/

Change appliance wattage, daily usage, electricity rate, and other available inputs to explore how energy consumption and estimated costs change.

## 🧮 How It Works

WattWise uses straightforward energy calculations.

**1. Daily Energy Consumption**

Daily Energy (kWh) = Power (W) × Usage (hours/day) ÷ 1000

**2. Energy Consumption Over a Period**

Period Energy (kWh) = Daily Energy (kWh) × Number of Days

**3. Estimated Electricity Cost**

Estimated Cost = Period Energy (kWh) × Electricity Rate (per kWh)

For example, an appliance rated at 1,000 W operating for 2 hours per day consumes approximately 2 kWh daily. At a rate of ₹8 per kWh, its estimated cost over 30 days is ₹480.

> **Note:** These are educational estimates. Actual electricity bills can vary due to tariffs, fixed charges, taxes, time-of-use rates, and real-world appliance behavior.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Responsive layout, styling, and dashboard design |
| Vanilla JavaScript | Interactive controls and energy calculations |
| Git & GitHub | Version control and project hosting |
| GitHub Pages | Public website deployment |

The web dashboard uses HTML, CSS, and JavaScript. It is a browser-based companion to a separate beginner C++ console energy analyzer; the website does not execute the C++ program.

## 🚀 Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/rajaryansharma56-dot/wattwise-energy-analyzer.git
   ```

2. Open the project folder:

   ```bash
   cd wattwise-energy-analyzer
   ```

3. Open `index.html` in your browser.

No package installation, build process, or backend server is required.

## 📂 Project Structure

```text
wattwise-energy-analyzer/
├── index.html    # Dashboard structure
├── style.css     # Styling and responsive layout
├── script.js     # Interactive features and calculations
└── README.md     # Project documentation
```

## 🎯 Project Goals

- Make household energy estimates easier to understand.
- Help users compare appliance-level consumption.
- Demonstrate practical front-end development skills.
- Apply mathematical calculations to a real-world problem.
- Build a usable, responsive interface without unnecessary dependencies.

## 🔮 Future Improvements

Potential extensions include:

- Saving appliance configurations between visits.
- Exporting energy reports as CSV.
- Visual charts for appliance-level consumption.
- Comparing usage scenarios and potential cost savings.
- Supporting more advanced tariff structures.

These are planned enhancements and are not claimed as existing features.

## ⚠️ Calculation Assumptions

- Appliance wattage and daily operating hours are user-provided estimates.
- The monthly estimate uses the selected calculation period.
- Consumption labels are illustrative project thresholds, not official energy-efficiency ratings.
- Estimated costs exclude charges that are not represented by the configured per-kWh rate.

## 👨‍💻 Developer

**Raj Aryan Sharma**  
B.Tech — Electronics & Instrumentation Engineering

Interested in C++, programming, electronics, and practical software projects.

- **GitHub:** [@rajaryansharma56-dot](https://github.com/rajaryansharma56-dot)
- **Project Repository:** [WattWise Energy Analyzer](https://github.com/rajaryansharma56-dot/wattwise-energy-analyzer)
- **Live Website:** [Open WattWise](https://rajaryansharma56-dot.github.io/wattwise-energy-analyzer/)

---

*WattWise Energy Analyzer is an educational portfolio project intended for estimation and demonstration purposes.*
