import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function LoginForm({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email or Username
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <div className="div_form">
              <div>Password</div> <div>Forgot Password?</div>
            </div>
          </label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEyeSlash className="input-icon" onClick={togglePasswordVisibility} />
            ) : (
              <FaRegEye className="input-icon" onClick={togglePasswordVisibility} />
            )}
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember Me
          </label>
        </div>
        <div className="form-submit">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          <span>New on our platform?</span>
          <a href="#" onClick={toggleForm}>
            Create an account
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
