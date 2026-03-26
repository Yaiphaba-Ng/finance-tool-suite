# 4. Database Schema

Relational database schema for the application (Postgres).

## 4.1 Entity Relationship Diagram

```mermaid
erDiagram
    USERS ||--o{ LEADS : "generates"
    USERS ||--o{ FINANCIAL_GOALS : "manages"
    
    USERS {
        uuid id PK
        string name
        string phone
        string email
        string password_hash
        boolean is_phone_verified
        timestamp created_at
    }

    LEADS {
        uuid id PK
        uuid user_id FK "optional"
        string guest_name "optional"
        string guest_phone "optional"
        string type "PL | BL | Currency | Calculator_Drop"
        jsonb details
        string status "New | Contacted | Converted"
        timestamp created_at
    }

    FINANCIAL_GOALS {
        uuid id PK
        uuid user_id FK
        string goal_name
        numeric target_amount
        integer target_year
        numeric inflation_rate
        numeric suggested_sip
        timestamp created_at
    }
```

## 4.2 Data Dictionary

### 4.2.1 Users
- `id`: UUID PK.
- `name`: Full name.
- `phone`: Unique mobile number.
- `email`: Unique email address.
- `password_hash`: Bcrypt hash.
- `is_phone_verified`: OTP status.

### 4.2.2 Leads
- `id`: UUID PK.
- `user_id`: FK users.id (nullable).
- `type`: Enquiry type (Loan, Calculator, etc).
- `details`: JSONB form data.
- `status`: Lifecycle status (New, Contacted).

### 4.2.3 Financial Goals
- `id`: UUID PK.
- `user_id`: FK users.id.
- `goal_name`: e.g., 'Retirement'.
- `target_amount`: Target in INR.
- `target_year`: Completion year.
- `suggested_sip`: Monthly investment.
