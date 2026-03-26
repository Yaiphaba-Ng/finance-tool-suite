# 2. Tech Stack, Architecture & Repo Structure

## 2.1 Technology Stack
- **Frontend Framework:** React Native (Expo).
- **UI & Navigation:** React Navigation, Native styling, Reanimated.
- **State Management:** Zustand, TanStack Query.
- **Local Storage:** `expo-secure-store`, `@react-native-async-storage/async-storage`.
- **Backend:** FastAPI (Python), Postgres.

## 2.2 System Architecture
Mobile Client (React Native) -> REST API (FastAPI) -> Backend Services (Auth, DB, 3rd Party Finance APIs).

## 2.3 Repository Structure
Concise folder separation for logic, state, presentation, and data.

```text
/
├── backend/              # FastAPI Source Code
│   ├── app/              # Application logic
│   └── tests/            # Pytest test cases
├── frontend/             # React Native Source Code
│   ├── app/              # Expo Router screens
│   ├── components/       # UI presentation components
│   ├── constants/        # Theme, Colors, Layout
│   └── utils/            # Math helpers, formatters
├── docs/                 # Documentation
├── tests/                # Integration tests
├── package.json          # Dependencies
└── pyproject.toml        # Backend dependencies (uv)
```

## 2.4 Coding Conventions
- **Absolute Imports:** Babel aliases (e.g., `@/components/Button`).
- **Functional Components:** Typed props (TypeScript).
- **Git Flow:** Feature branches merged via PRs.
