# 3. Reference Data Models

Core entities for the application.

## 3.1 User
Authenticated user within the system. Focus: lead generation.

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

## 3.2 Lead
Generated lead from calculator or enquiry form.

```json
{
  "id": "uuid",
  "user_id": "uuid (optional)",
  "guest_name": "John",
  "guest_phone": "123456789",
  "type": "PL | BL | Currency | Calculator_Drop",
  "details": {
    "amount": 500000,
    "tenure": 36,
    "employment": "Salaried"
  },
  "status": "New | Contacted | Converted",
  "created_at": "2026-03-25T12:00:00Z"
}
```

## 3.3 Financial Goal
Saved goal predicting required SIP.

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
