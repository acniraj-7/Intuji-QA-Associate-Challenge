# Intuji QA Associate Challenge - Cypress Automation

## Overview
This project automates a complex user flow on [Automation Exercise](https://automationexercise.com) using **Cypress**. It covers account creation, product browsing, cart management, checkout, and user session validation, with a focus on **reusability, modularity, and error handling**.

---

## Features

### 🧑‍💻 User Registration & Session Handling
- Registers a new user with random details  
- Verifies email uniqueness  
- Validates that the user is logged in  
- Stores session/cookies for reuse  

### 🛍️ Product Browsing & Filtering
- Navigates to Products page  
- Filters products by category (e.g., Women > Dress)  
- Verifies filtered product list and product details  

### 🛒 Cart & Quantity Management
- Adds multiple items to the cart from different categories  
- Updates quantity of a product  
- Verifies cart updates and total calculation  
- Removes products and validates cart updates  

### 💳 Checkout Flow with Fake Payment
- Proceeds to checkout  
- Fills address and enters fake card details  
- Confirms order and validates confirmation message  

### 🔐 Logout & Re-login
- Logs out and re-login  
- Validates that user state is preserved  

---

## 📂 Project Structure
- **e2e/** – Test scripts for Cart and Checkout flows  
- **pages/** – Page Object Model (POM) classes for reusable actions  
- **fixtures/** – Test data (user info, product names, etc.)  
- **support/** – Custom Cypress commands for login, add to cart, and verification  

---

## 🧰 Tools & Plugins Used
- **Cypress** – End-to-end testing framework  
- **Faker.js** – Generate random user data  
- **Custom Cypress Commands** – Reusable functions for login, add to cart, and verify product  
- **Cypress Intercept** – API request handling and assertions  
- **Screenshots** – Captured during test failures for debugging  

---

## ⚙️ Setup Instructions

Follow these steps to set up and run the project locally:

# 1. Clone the repository
git clone https://github.com/your-username/Intuji-QA-Associate-Challenge.git

# 2. Navigate into the project folder
cd Intuji-QA-Associate-Challenge

# 3. Install dependencies
npm install

# 4. Open Cypress Test Runner (GUI mode)
npx cypress open

# 5. Run all tests in headless mode
npx cypress run

# 6. Run a single test file
npx cypress run --spec "cypress/e2e/login.cy.js"

# 7. Run tests with a specific browser
npx cypress run --browser chrome

## 📸 Screenshots 
All screenshots for test failures are stored in: 
cypress/screenshots/

## 📬 Contact

For any questions or collaboration:
Niraj A.C.
📧 nirajac90@gmail.com
