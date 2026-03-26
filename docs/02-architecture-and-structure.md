# 2. Tech Stack, Architecture & Repo Structure

## 2.1 Technology Stack
- **Frontend Framework:** React Native (Android Target) -> optionally using Expo for faster iteration, but pure RN CLI depending on native modules required.
- **UI & Navigation:** React Navigation v6+, native styling, optional minimal library like React Native Paper or Tailwind/Nativewind.
- **State Management:** Zustand or React Context (Redux Toolkit if complex).
- **Data Fetching:** React Query (TanStack) or Axios directly.
- **Local Storage:** `expo-secure-store` or `react-native-keychain` for JWTs; `@react-native-async-storage/async-storage` for offline preferences.
- **Backend (If applicable natively):** Node.js/Express with Postgres (or similar) mapping to a RESTful JSON API.

## 2.2 System Architecture diagram
*(Reference image logic would go here)*
- Mobile Client (React Native) -> HTTP/JSON -> API Gateway -> Backend Services (Auth, DB, 3rd Party Finance APIs).

## 2.3 Proposed Industry Standard Repository Structure
This structure separates concerns logic, state, presentation, and data layers:

```text
/
├── .github/              # Automation, CI/CD pipelines
├── docs/                 # The App internal documentation
├── src/                  # Application Source Code
│   ├── api/              # Axios instances, REST API clients (auth.js, leads.js)
│   ├── assets/           # Images, fonts, and static resources
│   ├── components/       # Reusable UI presentation components (Buttons, Inputs, Cards)
│   ├── constants/        # App-wide constants (Colors, Theme, Layout, Config urls)
│   ├── context/          # React Contexts / Global state (Zustand stores)
│   ├── hooks/            # Custom reusable React Hooks (`useAuth`, `useCalculator`)
│   ├── navigation/       # Stack, Tab, and Drawer navigators configurations
│   ├── screens/          # Top-level screen components (LoginScreen, DashboardScreen)
│   ├── utils/            # Pure functions, math helpers, date formatters
│   └── App.tsx           # Entry React Component wrapping Providers and Navigation
├── tests/                # Jest/Detox test specifications
├── .eslintrc.js          # Linter settings
├── .prettierrc           # Formatting settings
├── babel.config.js       # Transpiler settings
├── package.json          # Dependencies
└── index.js              # Native execution entry point
```

## 2.4 Coding Conventions
- Uses **Absolute Imports** via Babel aliases (e.g., `import Button from '@components/Button'`).
- Functional React Components with strictly typed props (if TypeScript is adopted, which is highly recommended).
- **Git Flow:** Feature branches from `develop`, merged via PRs. `main` is production-ready.
