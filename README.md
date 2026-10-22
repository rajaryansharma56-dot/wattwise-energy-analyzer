# WattWise Energy Analyzer

A responsive energy analytics website that estimates daily electricity consumption, monthly energy use, and monthly electricity costs from appliance wattage and daily usage.

## Features
- Add, rename, and remove appliances
- Calculate daily and monthly energy use in kWh
- Estimate monthly electricity costs using a configurable rate
- Highlight the highest-consuming appliance
- Compare appliance-level usage, cost, and consumption level
- Responsive dark dashboard for desktop and mobile
- Runs entirely in the browser; no backend or account required

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a browser.

## Deploy with GitHub Pages
1. Push `index.html`, `style.css`, and `script.js` to the root of a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose branch `main` and folder `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. The public URL will appear in the Pages section.

## Calculation
- Daily energy (kWh) = Power (W) × Daily usage (hours) ÷ 1000
- Period energy (kWh) = Daily energy × Number of days
- Estimated cost = Period energy × Electricity rate per kWh

Consumption labels use the project's simple thresholds: High ≥ 2 kWh/day, Medium ≥ 1 kWh/day, and Low < 1 kWh/day. These are illustrative project thresholds, not official energy-efficiency ratings.

## Project context
WattWise is the web interface companion to a beginner C++ energy analyzer project. It is intended for educational estimation and portfolio demonstration; actual bills may vary with tariff rules, taxes, fixed charges, and appliance behavior.

## Tech stack
HTML · CSS · Vanilla JavaScript
