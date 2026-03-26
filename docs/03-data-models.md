# 3. Reference Data Models & Entities

This document outlines the conceptual data models the application will interact with. All endpoints will return/accept JSON based on these representations.

## 3.1 User Entity
Represents an authenticated user within the system. Focus is on capturing demographic info for lead generation.

```json
{
  "id": "uuid",
  "name": "Jane Doe",
  "phone": "+919876543210",
  "email": "jane@example.com",
  "is_phone_verified": true,
  "created_at": "2026-03-25T12:00:00Z"
}
```

## 3.2 Lead Entity
Represents a generated lead (either generic from a calculator context or specific from an enquiry form).

```json
{
  "id": "uuid",
  "user_id": "uuid (optional if guest)",
  "guest_name": "John",
  "guest_phone": "123456789",
  "type": "PL | BL | Currency | Calculator_Drop",
  "details": {
    "loan_amount": 500000,
    "tenure_months": 36,
    "employment": "Salaried"
  },
  "status": "New | Contacted | Converted",
  "created_at": "2026-03-25T12:00:00Z"
}
```

## 3.3 Financial Goal Entity
A saved goal predicting required SIP steps.

```json
{
  "id": "uuid",
  "user_id": "uuid",
  "goal_name": "Dream Vehicle",
  "target_amount": 1500000,
  "target_year": 2030,
  "inflation_rate": 6.5,
  "suggested_sip": 25000,
  "created_at": "2026-03-25T12:00:00Z"
}
```
