# 1. Product Requirements Specification

## 1.1 Objective
A Fintech Android application using React Native. Focus: investment planning, loan enquiries, currency exchange, and market data tracking. Success metric: user intent via lead generation.

## 1.2 Core Modules

### 1. Investment Calculators
Mathematical calculators (client-side).
- **SIP:** Monthly estimation.
- **Lumpsum:** One-time growth.
- **SIP Step-Up:** Annual percentage increases.
- **SIP Delay Cost:** Financial impact of delaying investment.
- **SIP Planner:** Goal-based monthly requirement.
- **UI:** Sliders, Indian Rupee formatting, native charts.

### 2. Financial Goals
- Custom goals (Retirement, Home, Vehicle).
- Tracks target, duration, inflation.
- Links to SIP Planner for investment paths.

### 3. Auth & Profile
- JWT-based login/signup (SecureStore).
- Captures: Name, Phone, Email.

### 4. Market Data
- Live/delayed data for Stocks/Mutual Funds.
- 3rd-party API integration with backend caching (Redis).

### 5. Lead Generation (Loans/Exchange)
- **Currency Exchange:** Capture pair/amount.
- **Loans (PL/BL):** Capture amount, tenure, employment.
- Leads synced to DB/CRM.

## 1.3 Performance Metrics
- Low-latency load times.
- Cached state to prevent loading spinners.
