# bank-system-assignment
RESTful backend system for lending and repayments using Node.js
# 🏦 Bank Loan Backend System – Node.js + MySQL

This backend project manages loan applications using RESTful APIs built with Node.js, Express, and MySQL. It supports submitting new loans and retrieving loan records.

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MySQL
- Postman (for testing)

---

## 📁 Project Structure

assignment-bank-system/ ├── server.js # Starts the Express server ├── app.js # Middleware and route configuration ├── routes/ │ └── loans.js # Contains loan-related API routes ├── assignment.md # Submission documentation └── README.md # This overview file

---

## 🔗 API Endpoints

| Method | Endpoint         | Description                        |
|--------|------------------|------------------------------------|
| GET    | `/loans`         | Fetch all loan applications        |
| POST   | `/loans`         | Submit a new loan                  |
| GET    | `/loans/:id`     | Fetch loan by ID (optional feature) |

---

## 🧪 Sample Loan Submission

```http
POST http://localhost:3000/loans
Content-Type: application/json

{
  "name": "Vinay Kumar",
  "amount": 75000,
  "tenure": 24
}
####sample response
{
  "message": "Loan created successfully"
}
####Validation + Error Handling
Checks for presence and correct type of name, amount, and tenure

Returns 400 Bad Request for missing or invalid fields

Catches and responds to database or server errors
