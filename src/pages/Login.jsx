import { useEffect, useState } from "react";
import { emailRegex, passwordRegex, validationMessages } from "../helper/data";

const Login = ({ setIsLogin }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  

const togglePassword = () => {
  setShowPassword((prev) => !prev);
};

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Yazarken hata temizle
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email
    if (!form.email.trim()) {
      newErrors.email = validationMessages.required;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = validationMessages.email;
    }

    // Password
    if (!form.password.trim()) {
      newErrors.password = validationMessages.required;
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password = validationMessages.password;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      setIsLogin(true);
      localStorage.setItem("key", "true");

      // Formu temizle
      setForm({
        email: "",
        password: "",
      });

      // Hataları temizle
      setErrors({});
    } else {
      setIsSubmitted(false);
    }
  };

  useEffect(() => {
    const isUserLogged = localStorage.getItem("key");

    if (isUserLogged) {
      setIsLogin(true);
    }
  }, [setIsLogin]);

  return (
    <div className="ios-form-container">
      <div className="ios-form-card">
        <h1 className="form-title">Welcome back</h1>
        <p className="form-subtitle">Login to continue shopping in SSHOP</p>

        {isSubmitted && (
          <div className="success-message">Login successful ✅</div>
        )}

        <form onSubmit={handleSubmit} className="form">
          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? "input-error" : ""}`}
              placeholder="you@example.com"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
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

          <button type="submit" className="ios-form-submit">
            Login
          </button>
        </form>

        {/* Alt kısım: register link */}
        <p className="auth-footer-text">
          Don&apos;t have an account?{" "}
          <a href="/register" className="auth-link">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
