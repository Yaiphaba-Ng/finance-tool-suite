# 5. Calculators 

## 5.1 Business Rules & Usage Matrix

| Calculator | End-User Inputs | Admin-Defined Constraints | Results |
| :--- | :--- | :--- | :--- |
| **SIP** | Monthly Deposit<br> Returns (%)<br> Duration (Years) | **Bounds:** ₹500 to ₹10L (Step: ₹500) <br> **Returns:** 1% to 30% <br> **Tenure:** Max 40 Years | Maturity Value<br> Invested vs Profit |
| **Lumpsum** | One-time Principal<br> Returns (%)<br> Duration (Years) | **Bounds:** ₹1K to ₹1Cr (Step: ₹1K) <br> **Returns:** 1% to 30% <br> **Tenure:** Max 40 Years | Maturity Value<br> Growth |
| **SIP Step-Up** | Initial Monthly<br> Annual Step-Up (%)<br> Returns, Tenure | **Step-Up:** 1% to 50% (Step: 1%) <br> **Other Bounds:** Same as SIP | Wealth with Hikes |
| **SIP Delay** | Monthly SIP<br> Delay (Months)<br> Returns, Tenure | **Delay:** 1 to 120 Months <br> **Other Bounds:** Same as SIP | Total Lost Wealth |
| **SIP Planner** | Target Goal (₹)<br> Time to Goal<br> Inflation (%) | **Target:** ₹10K to ₹10Cr <br> **Inflation:** 6% Base <br> **Tenure:** Max 40 Years | Required SIP |

---

## 5.2 Formulas & Logic

### 1. SIP & Lumpsum
- **SIP:** $FV = P \cdot \frac{(1 + i)^n - 1}{i} \cdot (1 + i)$
- **Lumpsum:** $FV = P \cdot (1 + r)^n$

### 2. SIP Step-Up
- $FV = \sum_{y=1}^{Y} \left[ P \cdot (1 + s)^{y-1} \cdot \frac{(1 + i)^{12} - 1}{i} \cdot (1 + i) \cdot (1 + i)^{12(Y-y)} \right]$
*(s = step-up rate, Y = years)*

### 3. SIP Delay Cost
- $Cost = FV_{Immediate} - FV_{Delayed}$
*(Delayed uses $n = (TotalY - DelayY) \cdot 12$)*

### 4. SIP Planner
- $P = \frac{FV_{Target} \cdot i}{((1 + i)^n - 1) \cdot (1 + i)}$
*(Target adjusted for inflation: $FV_{Target} = PV \cdot (1 + f)^n$)*

---

## 5.3 Implementation Requirements

| Parameter | End-User Control | Rationale |
| :--- | :--- | :--- |
| **Amount** | Slider + Masked Input | Balance of precision and speed. |
| **Returns (%)** | Slider (0.5% steps) | Based on Admin-set defaults. |
| **Tenure** | Slider + Year Chips | Quick 5Y, 10Y, 15Y selection. |
| **Currency** | Masked Text (₹) | Indian Rupee (Lakhs/Crores). |

### Technical Notes
- **Math:** Resides in `frontend/utils/math.ts` for zero-latency.
- **Config:** App must fetch Admin bounds from `/api/v1/config` on startup.
