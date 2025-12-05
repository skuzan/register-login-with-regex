# SSHOP – Auth & Form Validation Demo (React)

Simple authentication UI for an e-commerce project called **SSHOP**.  
It includes **iOS-style** Register & Login pages with **Regex-based form validation**.

---

## 🧩 Features

- **Register page**

  - Full name, username, email, password, confirm password, phone
  - Client-side validation with regular expressions
  - Inline error messages under each field
  - “I agree to the Terms & Privacy Policy” checkbox
  - Success message on valid submit

- **Login page**

  - Email + password fields
  - Regex validation
  - On success, sets a simple login flag in `localStorage` (`key = "true"`)

- **Navigation**

  - Minimal navbar with:
    - `/register`
    - `/login`
  - Built with `react-router` (`NavLink`, `Routes`, `Route`)

- **UI**
  - iOS-like card layout
  - Centered forms
  - Soft shadows, rounded inputs, blue primary color (`#007aff`)
  - Inline validation messages in red

---

## 🛠 Tech Stack

- **React** (functional components, hooks)
  - `useState`, `useEffect`
- **react-router**
  - `<Routes>`, `<Route>`, `<NavLink>`
- **CSS**
  - Custom iOS-style form & layout
- **localStorage**
  - Simple login state persistence

Optionally, the project may use **JSON Server** (port `3005`) later via `axios` (a `BASE_URL` is already defined), but the current snippet focuses on the UI & validation.

---

## 📂 Project Structure (simplified)

```bash
src/
  App.jsx
  App.css
  components/
    Navbar.jsx
  pages/
    Register.jsx
    Login.jsx
  helper/
    data.js        # regex patterns + validation messages

1. Clone the repo
git clone <your-repo-url>
cd <your-repo-folder>

2. Install dependencies
npm install
# or
yarn install

3. Start the React app
npm start
# or
yarn start

If you’re using Vite:
npm run dev
# or
yarn dev

Then open:
http://localhost:3000

🔐 Validation Logic
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const phoneRegex = /^05\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
export const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
export const fullNameRegex =
  /^[A-Za-zÇçĞğİıÖöŞşÜü]+(?:\s+[A-Za-zÇçĞğİıÖöŞşÜü]+)+$/;

export const validationMessages = {
  required: "This field is required",
  email: "Please enter a valid email address",
  password:
    "Password must be at least 8 characters long and contain 1 uppercase letter, 1 lowercase letter, and 1 number",
  passwordMatch: "Passwords do not match",
  phone: "Please enter a valid phone number (05XX XXX XX XX)",
  username:
    "Username must be 3–20 characters and may include letters, numbers, and _",
  fullName: "Please enter a Name",
  login: "Incorrect username or password. Please try again.",
};

🧾 Pages Overview

/register – Register.jsx
	•	Controlled inputs (fullName, username, email, password, confirmPassword, phone)
	•	On submit:
	•	Runs validateForm()
	•	If valid:
	•	Shows success message
	•	Clears form
	•	If invalid:
	•	Shows field-specific error messages (errors[fieldName])

/login – Login.jsx
	•	Controlled inputs (email, password)
	•	On submit:
	•	Runs validateForm()
	•	If valid:
	•	Sets isLogin = true via setIsLogin
	•	Saves localStorage.setItem("key", "true")
	•	Shows “Login successful ✅”
	•	If invalid:
	•	Shows inline error messages
	•	useEffect on mount:
	•	Checks localStorage.getItem("key")
	•	If present, automatically sets user as logged in

    🧭 Navbar

    <NavLink to="/register">Register</NavLink>
<NavLink to="/login">Login</NavLink>


```
