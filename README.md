### About project

CLI which acts as tRPC client for Expense Tracker API - [Expense Tracker API repository](https://github.com/kamil-kubiczek/expense-tracker-api)

**Project status: 🟡WIP**

---

### Features

Features provided by API and exposed to user by CLI are described here - https://roadmap.sh/projects/expense-tracker-api

---

### How to run CLI client

**Prerequisites:**

-  must have `bun` installed
-  must have `npm@8.19.4 or higher` installed

**Steps**

1. Download Expense Tracker API public repository - (API repository)[https://github.com/kamil-kubiczek/expense-tracker-api]
2. Setup Expense Tracker API locally - [Steps to run API locally](https://github.com/kamil-kubiczek/expense-tracker-api?tab=readme-ov-file#how-to-run-api)
3. Inside `expense-tracker-api` repository use `npm link`
4. Then go to `expense-tracker-cli` folder and use `npm link expense-tracker-api`
5. Run CLI using `bun run start`

---
