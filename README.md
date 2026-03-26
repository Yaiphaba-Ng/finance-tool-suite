# [Project Name] - Fintech Phase 1 (Android)

[Project Name] is a high-performance Fintech application built with **React Native (Expo)** and **FastAPI**. It focuses on captured intent through interactive investment tools, loan enquiries, and real-time market data tracking.

## 🚀 Key Modules & Features

### 1. Investment Calculators (Client-Side)
- **SIP Calculator:** Systematic Investment Plan estimation with interactive charts.
- **Lumpsum Calculator:** One-time investment growth tracking.
- **SIP Step-Up:** Factor in annual increments to visualize long-term wealth creation.
- **Delay Cost:** High-impact visualization of the financial cost of waiting.
- **Goal Planner:** Reverse-calculate required SIP based on target goals (Home, Retirement, etc.).

### 2. Lead Generation Engine
- **Authenticated Leads:** Capture user intent from calculators and enquiries.
- **Enquiry Forms:** Specialized modules for Personal Loans (PL), Business Loans (BL), and Currency Exchange.
- **CRM Ready:** Backend designed for easy integration with external CRM webhooks.

### 3. Market Data Dashboard
- **Live/Delayed Data:** Stocks and Mutual Fund tracking.
- **Smart Caching:** Backend Redis-ready layer to minimize 3rd-party API costs and latency.

## 🛠️ Detailed Tech Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Mobile** | React Native (Expo SDK 54) | Cross-platform performance with native-feel. |
| **Styling** | Custom App Theme (Slate & Emerald) | Professional, modern fintech aesthetic. |
| **Animations** | React Native Reanimated | 60fps fluid transitions for sliders and charts. |
| **State** | Zustand / TanStack Query | Lightweight state and efficient data fetching. |
| **Backend** | FastAPI (Python 3.13) | High concurrency, type-safety, and rapid development. |
| **Package Mgr** | Astral `uv` | 10x faster dependency resolution than pip. |
| **Database** | PostgreSQL | Relational integrity for user profiles and leads. |

## 📁 Repository Structure

```text
.
├── backend/                # FastAPI Application
│   ├── app/
│   │   ├── core/           # Config, Security, Constants
│   │   ├── routes/         # API Endpoints (Leads, Auth, Market)
│   │   ├── schemas.py      # Pydantic data models
│   │   └── main.py         # Application Entry Point
│   ├── pyproject.toml      # UV Project definition
│   └── .env                # Secrets & Config
├── frontend/               # React Native (Expo Router)
│   ├── app/                # File-based routing (Tabs, Modals)
│   ├── components/         # Atomic App UI Components
│   ├── constants/          # Theme, Colors, Layout
│   └── utils/              # Math helpers & Formatters
└── docs/                   # Full Technical Specification
```

## 🛠️ Getting Started

### Backend (FastAPI)
1. Install [astral-uv](https://github.com/astral-sh/uv).
2. `cd backend`
3. `uv run dev` (Starts server on port 8000).
4. **API Docs:** Visit `http://localhost:8000/docs` for the interactive Swagger UI.

### Frontend (Expo)
1. `cd frontend`
2. `npm install`
3. `npx expo start`
4. Use the **Expo Go** app on Android or an emulator to view the app.

## 📈 Development Workflow & Standards
- **Math Logic:** All financial formulas must be implemented in `frontend/utils/math.ts` and unit tested.
- **UI Components:** Use `AppButton` and `AppCard` to maintain consistent branding.
- **API Design:** All new endpoints must include Pydantic schemas for request/response validation.
- **Documentation:** Update `docs/` whenever a new mathematical formula or database change is introduced.

## 📚 Technical Docs Index
- [Product Requirements](docs/01-product-requirements.md)
- [Database Schema & ERD](docs/04-database-schema.md)
- [Calculators & Math Spec](docs/05-fintech-calculators-spec.md)
- [Architecture & Structure](docs/02-architecture-and-structure.md)
- [Data Models](docs/03-data-models.md)
- [SRS & Estimation](docs/srs_and_estimation.md)
