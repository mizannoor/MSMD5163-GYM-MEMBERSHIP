# GYM MEMBERSHIP SYSTEM - MSMD5163  
This repository contains the **Gym Membership System**, developed as a microservice-based architecture for the **MSMD5163 Mobile Backend** project. The system includes core functionalities such as user authentication, CRUD operations, and integration with third-party services.  

## **Repository URL**  
[MSMD5163-GYM-MEMBERSHIP Repository](https://github.com/mizannoor/MSMD5163-GYM-MEMBERSHIP.git)

---

## **Project Overview**  
The Gym Membership System enables efficient management of gym members, plans, payments, and notifications through independent microservices. This project follows industry best practices for microservice architecture, focusing on modularity, scalability, and maintainability.

---

## **Microservices**
### 1. **Authentication Service (`auth-service`)**  
Handles user login, authentication, and token management.  
- **Endpoints**:
  - `POST /auth/login`: Authenticates user and returns a JWT token.
- **Features**:
  - Validates `Accept` and `Content-Type` headers.
  - Implements secure password hashing and token generation.

### 2. **CRUD Service (`crud-service`)**  
Manages CRUD operations for gym-related entities such as users, memberships, plans, payments, and notifications.  
- **Endpoints**:
  - `POST /api/users`: Create a new record.
  - `GET /api/users`: Retrieve existing records.
  - `PUT /api/users/:id`: Update a record.
  - `DELETE /api/users/:id`: Delete a record.
- **Features**:
  - Protects endpoints with JWT authentication.
  - Supports comprehensive error handling.

### 3. **Third-Party Integration Service (`third-party`)**  
Provides integration with external services for notifications (e.g., email).  
- **Endpoints**:
  - `POST /api/send-email`: Send notifications.
- **Features**:
  - Supports multiple notification types (email).

---

## **Architecture**
The system is built with Node.js, Docker, and MongoDB, adhering to the microservice architecture. Each microservice operates independently and communicates securely using JWT tokens.  

![Architecture Diagram Placeholder](https://github.com/mizannoor/MSMD5163-GYM-MEMBERSHIP/blob/main/assets/others/gym_membership_erd.png)

---

## **Project Structure**
```plaintext
gym-membership-system/
├── .env                       # Environment variables
├── docker-compose.yml         # Docker configuration
├── README.md                  # Project documentation
├── auth-service/              # Authentication microservice
├── crud-service/              # CRUD microservice
├── third-party/               # Third-party integration microservice
```

---

## **Setup Instructions**
### **Prerequisites**:
- Node.js v16+
- Docker and Docker Compose
- MongoDB Atlas or local MongoDB instance

### **Installation**:
1. Clone the repository:
   ```bash
   git clone https://github.com/mizannoor/MSMD5163-GYM-MEMBERSHIP.git
   cd MSMD5163-GYM-MEMBERSHIP
   ```

2. Install dependencies for each microservice:
   ```bash
   cd auth-service && npm install
   cd ../crud-service && npm install
   cd ../third-party && npm install
   ```

3. Configure `.env` files:
   - Add database URIs, JWT secrets, and other environment variables to `.env` files in each service.

4. Start services with Docker:
   ```bash
   docker-compose up --build
   ```

---

## **Testing**
Use Postman or any REST client to test the endpoints. Example:
1. **Authentication**:
   ```http
   POST /login
   ```
   Body:
   ```json
   {
     "email": "user@example.com",
     "password": "password123"
   }
   ```

2. **CRUD Operations**:
   ```http
   GET /api/users
   ```

---

## **References**
- [Node.js Documentation](https://nodejs.org/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Docker Documentation](https://docs.docker.com/)