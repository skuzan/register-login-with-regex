export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@}]{2,3}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const phoneRegex = /^05\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
export const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
export const fullNameRegex = /^[A-Za-zÇçĞğİıÖöŞşÜü]+(?:\s+[A-Za-zÇçĞğİıÖöŞşÜü]+)+$/;

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
  login : "Incorrect username or password. Please try again."
};
