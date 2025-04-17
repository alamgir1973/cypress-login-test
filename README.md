# 🔐 Cypress Login Automation Project

This project contains automated tests for the login functionality of the practice website [Practice Test Automation](https://practicetestautomation.com/practice-test-login/), using **Cypress.io**.

Both **positive (valid credentials)** and **negative (invalid credentials)** scenarios are covered to ensure reliable behavior of the login system.

---

## 📂 Project Structure

- /cypress └── /e2e └── login.cy.js
- /cypress └── /e2e └── login-negative.cy.js #Cypress tests for login functionality

---

## 🧪 Test Cases Included

### ✅ Positive Login Test

- Logs in with **valid username and password**
- Verifies that the user is redirected to the secure area
- Checks for visible success message or secure content

### ❌ Negative Login Tests

Covers various invalid login scenarios to validate error handling:

| Test Case                         | Expected Result             |
| --------------------------------- | --------------------------- |
| Invalid username + password       | "Your username is invalid!" |
| Valid username + invalid password | "Your password is invalid!" |
| Invalid username + valid password | "Your username is invalid!" |
| Empty username                    | "Your username is invalid!" |
| Empty password                    | "Your password is invalid!" |
| Both fields empty                 | "Your username is invalid!" |

---

## 🛠 Tech Stack

- [Cypress](https://www.cypress.io/) – JavaScript end-to-end testing framework
- Mocha & Chai syntax (built-in)
- Git & GitHub for version control

---

## 🚀 Getting Started

1. Clone this repo:
   ```bash
   git clone https://github.com/alamgir1973/cypress-login-test.git
   npm install
   npx cypress open
   ```
2. Choose the login.cy.js and login-negative.cy.js files under E2E tests and watch the tests run.

---

## 🙌 Author

Mohammed Alamgir – Software Tester in training, learning Cypress, JavaScript, and React.

---

## 📎 License

## 🧩 How to Use This:

1. Copy the content above.
2. Replace your current `README.md` file in your repo root with it.
3. Update anything marked like `your-username`, `your-repo-name`, or **Your Name**.

---

## 🧩 How to Use This:

1. Copy the content above.
2. Replace your current `README.md` file in your repo root with it.
3. Update anything marked like `your-username`, `your-repo-name`, or **Your Name**.

---

If you want, I can help write a logout test next and guide you on how to push all changes to GitHub with `git commit` and `git push`.

Want to go for that next?
