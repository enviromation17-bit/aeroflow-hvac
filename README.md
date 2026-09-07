# AeroFlow HVAC — AI Lead Recovery Demo

A polished portfolio demo showing how an HVAC business can capture, qualify, respond to, and recover customer leads with AI automation.

> **Portfolio demo — not a live HVAC company.** All names, metrics, locations, and dashboard activity are demo data.

## Demo flow

Customer inquiry → Lead intake → AI analysis → Lead score → Customer response → Owner notification → Follow-up

The automation backend is designed around n8n. The frontend is a static GitHub Pages site and can be connected to a production n8n webhook when the hosted automation is ready.

## Frontend

- Responsive single-page demo
- Clear demo/data labeling
- Interactive AI conversation preview
- Lead submission form
- Automation workflow visual
- Demo dashboard
- No fake client results or testimonials

## n8n integration

The current development webhook is intentionally not hard-coded into the portfolio build. Configure the endpoint in `config.js` when the production n8n URL is ready.

## GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`. GitHub Pages can publish the `main` branch through Actions; pushes to `main` trigger deployment automatically.

Live project URL after Pages is enabled:

`https://enviromation17-bit.github.io/aeroflow-hvac/`

## Important

Do not put API keys, private webhook credentials, or other secrets in this repository. The browser-facing webhook should be a public endpoint designed to accept this demo's lead payload safely.
