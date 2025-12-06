import { useState } from "react";

import {
  emailRegex,
  fullNameRegex,
  passwordRegex,
  phoneRegex,
  usernameRegex,
  validationMessages,
} from "../helper/data";
import { Link } from "react-router";


const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = validationMessages.required;
    } else if (!fullNameRegex.test(form.fullName)) {
      newErrors.fullName = validationMessages.fullName;
    }
    if (!form.username.trim()) {
      newErrors.username = validationMessages.required;
    } else if (!usernameRegex.test(form.username)) {
      newErrors.username = validationMessages.username;
    }
    if (!form.email.trim()) {
      newErrors.email = validationMessages.required;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = validationMessages.email;
    }
    if (!form.password.trim()) {
      newErrors.password = validationMessages.required;
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password = validationMessages.password;
    }
    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = validationMessages.required;
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = validationMessages.passwordMatch;
    }

    if (!form.phone.trim()) {
      newErrors.phone = validationMessages.required;
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = validationMessages.phone;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);

      // İstersen temizle
      setForm({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      });

      // Hataları temizle
      setErrors({});
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="form-container ios-form-container">
      <div className="ios-form-card">
        <h1 className="form-title">Create Account</h1>
        <p className="form-subtitle">Sign up to continue shopping in SSHOP</p>

        {isSubmitted && (
          <div className="success-message">Registration successful ✅</div>
        )}

        <form onSubmit={handleSubmit} className="form">
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className={`form-input ${errors.fullName ? "input-error" : ""}`}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <span className="error-text">{errors.fullName}</span>
            )}
          </div>

          {/* Username */}
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className={`form-input ${errors.username ? "input-error" : ""}`}
              placeholder="john_doe"
            />
            {errors.username && (
              <span className="error-text">{errors.username}</span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? "input-error" : ""}`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <span className="error-text">{errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? "input-error" : ""}`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="show-password-btn"
                onClick={togglePassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className={`form-input ${
                  errors.confirmPassword ? "input-error" : ""
                }`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="show-password-btn"
                onClick={toggleConfirmPassword}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="error-text">{errors.confirmPassword}</span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? "input-error" : ""}`}
              placeholder="05XX XXX XX XX"
            />
            {errors.phone && (
              <span className="error-text">{errors.phone}</span>
            )}
          </div>

          {/* Terms (Register extra kısmı) */}
          <div className="auth-extra">
            <label className="auth-checkbox-label">
              <input type="checkbox" className="auth-checkbox" />
              <span>I agree to the Terms & Privacy Policy</span>
            </label>
          </div>

          <button type="submit" className="form-submit ios-form-submit">
            Sign Up
          </button>
        </form>

        {/* Alt kısım: Already have an account */}
        <p className="auth-footer-text">
          Already have an account?{" "}
          <Link to= '/login'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
