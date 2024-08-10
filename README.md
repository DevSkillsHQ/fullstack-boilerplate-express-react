# Fullstack Boilerplate Express/React

A backbone for your coding challenge.

## Contents

- [Backend service](app-express) - an Express service with a `/ping` endpoint. Extend with your code.
- [Frontend app](app-react) - a React app. Extend with your code.
- [E2E test suites](cypress/e2e) - a backend and a frontend Cypress test suites. Extend with your tests.


## Tech Stack

- React
- Vite
- Vitest
- ExpressJS
- Cypress
- GitHub Actions

## Getting started

1. Build your app.

```bash
npm install
npm run build # both Express backend and React frontend
npm run build:backend # only Express backend
npm run build:frontend # only React frontend
```

2. Start your app.

```bash
npm install
npm run start # both Express backend and React frontend
npm run start:backend # only Express backend
npm run start:frontend # only React frontend
```

3. Run the Cypress tests.

```bash
npm run test # run project tests under `cypress/e2e`

---

Authored by [Alva Labs](https://www.alvalabs.io/).
