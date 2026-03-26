# 1. Product Requirements Specification (The Application)

## 1.1 Objective
To build The App, a Fintech Android application built using React Native. The platform focuses on investment planning, loan enquiries, currency exchange, and market data tracking. The primary business success metric is capturing user intent via actionable lead generation.

## 1.2 Core Modules

### 1. Investment Calculators
Mathematical calculators ran client-side.
- **SIP Calculator:** Regular monthly SIP estimation.
- **Lumpsum Calculator:** One-time investment growth.
- **SIP Step-Up Calculator:** Factor in yearly SIP increases.
- **SIP Delay Cost Calculator:** Visualize the financial impact of delaying investments.
- **SIP Planner:** Goal-based, calculating necessary SIP based on target amounts and timeline.
- **UI Needs:** Dynamic sliders, localized Indian Rupee formatting, and Native charting components (e.g., react-native-svg-charts).

### 2. Financial Goals Tracking
- Users can create custom financial goals (Retirement, Home, Vehicle).
- Tracks target amount, duration, and inflation index.
- Automatically links to the *SIP Planner* to offer concrete investment paths.

### 3. User Authentication & Profile
- **Login/Signup:** Secure endpoints storing JWTs in Android SecureStore.
- Captures fundamental Lead Data: **Name, Phone, Email**.
- Optional module for OTP login (e.g., via Firebase or Twilio).

### 4. Market Data Dashboard
- Provides Basic/Live or delayed data for Stocks/Mutual Funds.
- Fetched via a 3rd-party financial API (Kite Connect, Alpha Vantage).
- Requires a backend caching layer (Redis) to prevent rate limits on mobile devices scaling up requests.

### 5. Enquiry & Lead Generation (Loans/Exchange)
- **Currency Exchange:** Capture required pair and amount.
- **Personal/Business Loans (PL/BL):** Capture required loan amount, tenure, employment type.
- Form submissions generate authenticated leads that are synced to our Database/CRM.

## 1.3 Key Metrics
- Low-latency app load times (splash screen -> calculators immediately accessible).
- Offline or cached state tracking to prevent repeated loading spinners for static formulas or recent user data.
