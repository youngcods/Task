import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErrors,
  clearInputs,
  setEmail,
  setPassword,
} from "../../store/auth/authSlice";
import { handleLogin } from "../../store/auth/authActions";

const Login = () => {
  const { email, password, emailError, passwordError } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showError, setShowError] = useState(false);

  const handleCreateUser = () => {
    if (!email.trim() || !password.trim()) {
      setShowError(true);
      return;
    }

    const objUser = {
      email,
      password,
      navigate,
    };

    dispatch(handleLogin(objUser));
  };

  return (
    <div className="box-register">
      <div className="logo-box">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="Logo"
          className="logo-login"
          onClick={() => navigate("/")}
        />
        <p>Welcome back</p>
      </div>
      <div className="register-inputs">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        {showError ? <p>Enter all inputs</p> : <></>}
        {emailError && (
          <div
            style={{
              width: "30%",
              textAlign: "center",
            }}
          >
            <p>{emailError}</p>
          </div>
        )}
        {passwordError && (
          <div
            style={{
              width: "30%",
              textAlign: "center",
            }}
          >
            <p>{passwordError}</p>
          </div>
        )}
      </div>
      <div className="register-btn">
        <button onClick={handleCreateUser}>Log in</button>
      </div>
      <div className="register-way">
        <p
          onClick={() => {
            navigate("/register");
            dispatch(clearInputs());
            dispatch(clearErrors());
          }}
        >
          If you don't have account, then click registration
        </p>
      </div>
    </div>
  );
};

export default Login;
