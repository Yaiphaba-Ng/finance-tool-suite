# SRS & Project Estimation

## 1. Introduction
High-level specification and work breakdown for the application. Focus: Lead generation via financial tools.

## 2. Core Features
- **Calculators:** SIP, Lumpsum, Step-Up, Delay Cost, Goal Planner.
- **Goals:** CRUD for personal financial targets.
- **Leads:** Auth-based and guest lead capture for Loans/Exchange.
- **Market:** Cached dashboard for Stocks/MFs.

## 3. Tech Stack
- **Frontend:** React Native (Expo).
- **Backend:** FastAPI, PostgreSQL.

## 4. Work Breakdown Structure (WBS)

| Module | Key Tasks | Effort (Hours) |
| :--- | :--- | :--- |
| **1. UI/UX** | Wireframes, Mockups, Dark Mode. | 40 - 60 |
| **2. Setup** | Project init, Navigation, Theme. | 24 - 32 |
| **3. Auth** | JWT, Signup/Login, Profile. | 32 - 40 |
| **4. Calculators** | Math formulas, Sliders, Charts. | 40 - 56 |
| **5. Goals** | DB schemas, CRUD APIs, UI. | 24 - 32 |
| **6. Market Data** | API Integration, Caching. | 32 - 48 |
| **7. Leads** | Dynamic forms, Validation, DB. | 24 - 32 |
| **8. QA** | Testing, Bug fixing. | 40 - 56 |
| **9. Build** | Deployment, Keystore, Store setup. | 24 - 32 |

**Total Estimated Effort:** ~280 - 388 Hours (7 to 10 Weeks).

## 5. Critical Dependencies
- Market Data API selection (Kite Connect, Alpha Vantage).
- Lead routing strategy (Backend vs CRM).
