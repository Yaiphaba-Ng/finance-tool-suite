# 5. Fintech Calculators & Mathematical Specification

This document defines the mathematical core and dual-interface requirements for the financial calculator suite.

## 5.1 Executive Summary Table (Master Configuration)

This table serves as the definitive guide for the **Fintech Service Provider (Client)** to define business rules and for the development team to implement validation logic.

| Calculator | Admin Configurable Parameters | Value Ranges (Min / Max / Step) | Key Output / Visuals |
| :--- | :--- | :--- | :--- |
| **SIP** | Monthly Investment, Returns (%), Tenure (Yrs) | ₹500 / ₹10L / ₹500 <br> 1% / 30% / 0.1% <br> 1 / 40 / 1 | Maturity Value, Invested vs Returns Chart |
| **Lumpsum** | Principal, Returns (%), Tenure (Yrs) | ₹1K / ₹1Cr / ₹1K <br> 1% / 30% / 0.1% <br> 1 / 40 / 1 | Maturity Value, Total Wealth Growth |
| **SIP Step-Up** | Initial Monthly, Annual Step-Up (%), Returns, Tenure | Step-Up: 1% / 50% / 1% <br> Others same as SIP | Impact of annual increments on wealth |
| **SIP Delay** | Monthly Investment, Delay (Months), Returns, Tenure | Delay: 1 / 120 / 1 Month <br> Others same as SIP | "Cost of Procrastination" (Total Loss) |
| **SIP Planner** | Target Goal (₹), Tenure, Inflation (%), Returns (%) | Target: ₹10K / ₹10Cr / ₹10K <br> Inflation: 0% / 15% / 1% | Required Monthly SIP to reach goal |

---

## 5.2 Access Control & Role Definition

To ensure the application remains adaptable for the **Fintech Service Provider**, the architecture distinguishes between configuration and consumption:

1.  **Admin (Client - Fintech Provider):**
    *   **Access:** Backend Admin Dashboard / Configuration API.
    *   **Control:** Defines the "Bounds of Play" (Min, Max, Step) and "Default Values" for all sliders and inputs.
    *   **Goal:** Control risk and steer customer expectations based on market conditions.

2.  **End-User (Customer):**
    *   **Access:** Mobile Application.
    *   **Control:** Interacts with the calculator interface *within* the constraints set by the Admin.
    *   **Goal:** Plan investments and submit high-intent leads.

---

## 5.3 Interface Matrix per Calculator Type

### 1. SIP & Lumpsum Calculators
| Interface | Controls & Visibility | Description |
| :--- | :--- | :--- |
| **Admin UI** | Input Fields for: `min_amount`, `max_amount`, `default_returns`, `max_tenure` | Sets the global boundaries for the customer. |
| **End-User UI** | Interactive Sliders for: `Investment Amount`, `Expected Returns`, `Tenure` | Customer slides between the Admin-defined Min and Max. |

### 2. SIP Step-Up Calculator
| Interface | Controls & Visibility | Description |
| :--- | :--- | :--- |
| **Admin UI** | Toggle: `enable_stepup`, Input: `max_stepup_pct` | Enables the feature and caps the maximum allowed hike. |
| **End-User UI** | Slider: `Annual Step-Up %`, Toggle: `Visualize Impact` | User calculates how salary hikes affect maturity. |

### 3. SIP Delay Cost Calculator
| Interface | Controls & Visibility | Description |
| :--- | :--- | :--- |
| **Admin UI** | Input: `default_delay_months`, `warning_threshold_amount` | Configures the default delay and when to highlight "Critical Loss". |
| **End-User UI** | Slider: `Delay Period (Months)`, Red Alert Text | Visualizes the financial penalty of waiting. |

### 4. SIP Planner (Goal-Based)
| Interface | Controls & Visibility | Description |
| :--- | :--- | :--- |
| **Admin UI** | Config: `inflation_base_rate`, List: `goal_categories` (Home, Education, etc.) | Defines the standard inflation rate and available goals. |
| **End-User UI** | Goal Category Selector, Target Amount Input, Inflation Toggle | Finds the monthly commitment needed for a specific life goal. |

---

## 5.4 UI/UX Configuration Matrix (Global Styling)

| Parameter | End-User UI Control | Rationale |
| :--- | :--- | :--- |
| **Amount** | Slider + Masked Input | Balance between precision and ease of use. |
| **Returns (%)** | Slider (0.5% steps) | Historical equity average (Admin set) is the starting point. |
| **Tenure** | Slider + Year Chips | Quick selection of 5Y, 10Y, 15Y presets. |
| **Currency** | Masked Text (₹) | Localized Indian Rupee formatting (Lakhs/Crores). |

## 5.5 Technical Implementation Note
- **Zero-Latency:** All math logic MUST reside in `frontend/utils/math.ts`.
- **Remote Config:** The Mobile app should fetch Admin-defined bounds (Min/Max/Step) from the `/api/v1/config` endpoint on startup to allow the Fintech Provider to update values without an app store release.
