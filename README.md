### About project

CLI which acts as tRPC client for Expense Tracker API - [Expense Tracker API repository](https://github.com/kamil-kubiczek/expense-tracker-api)

**Project status: 🟢Ready to use**

---

### Features

Features provided by API and exposed to user by CLI are described here - https://roadmap.sh/projects/expense-tracker-api

---

### How to run CLI client

**Prerequisites:**

-  must have `bun` installed
-  must have `npm@8.19.4 or higher` installed

**Steps**

1. Download Expense Tracker API public repository - [API repository](https://github.com/kamil-kubiczek/expense-tracker-api)
1. Setup Expense Tracker API locally in development mode - [Steps to run API locally](https://github.com/kamil-kubiczek/expense-tracker-api?tab=readme-ov-file#how-to-run-api)
1. Inside `expense-tracker-api` repository use `npm link`
1. Then go to `expense-tracker-cli` folder and use `npm link expense-tracker-api`
1. Run API locally
1. Copy `.env.example` and rename to `.env`
1. Change `SERVER_URL` to url of you API
1. Run CLI using `bun run start`

**If you set up API in production mode, remember to find out which port CLI app is using and construct proper URL for API CORS. If you don't know, run API in development mode!**

---
