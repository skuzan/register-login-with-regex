import { Link } from "react-router";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-card">
        <div className="home-badge">SSSHOP</div>
        <h1 className="home-title">Sign in or create your account</h1>
        <p className="home-text">
          Jump back into shopping by logging in, or set up a new account in a
          few quick steps. Either way, you will be ready in seconds.
        </p>
        <div className="home-actions">
          <Link to="/login" className="home-btn primary">
            Login
          </Link>
          <Link to="/register" className="home-btn ghost">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
