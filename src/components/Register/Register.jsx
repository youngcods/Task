import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./register.css";
import {
  setEmail,
  setName,
  setPassword,
  setSurname,
} from "../../store/auth/authSlice";
import { handleSignup } from "../../store/auth/authActions";

const Register = () => {
  const { email, password, name, surname, emailError, passwordError } =
    useSelector((state) => state.auth);

  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateUser = () => {
    if (!name.trim() || !surname.trim() || !email.trim() || !password.trim()) {
      setShowError(true);
      return;
    }

    const objUser = {
      name,
      surname,
      email,
      password,
      navigate,
    };
    dispatch(handleSignup(objUser));
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

        <p>Let's do this</p>
      </div>
      <div className="register-inputs">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => dispatch(setSurname(e.target.value))}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
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
        <button onClick={handleCreateUser}>JOIN</button>
      </div>
    </div>
  );
};

export default Register;
