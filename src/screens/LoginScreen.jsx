import React, { useState } from 'react';
import img from '../assets/images.png';
import Registration from '../components/Registration/Registration';
import LoginForm from '../components/Login/LoginForm';

function Login() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <div className="loginpage">
        <div className="center_div">
          <p>
            Welcome to <img src={img} alt="img" />
          </p>
        </div>

        <div className="blank">
          <div className="main_div">
            {showLogin ? (
              <div>
                <h2>Welcome Developers</h2>
                <p>Please sign-in to your account </p>
                <LoginForm toggleForm={toggleForm} />
              </div>
            ) : (
              <Registration toggleForm={toggleForm} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
