import { Link } from "react-router-dom";
import React, { useState } from "react";
import { colors } from "@material-ui/core";

export default function ForgotPassword() {
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState("");

  const setVal = (e) => {
    setEmail(e.target.value);
  };
  const sendLink = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/sendpasswordLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({ email }),
    });


    const data = await res.json();

    if ((data.status = 201)) {
      setEmail("");
      setMessage(true);
    } else {
      console.log("User invalid");
    }
  };

  return (
    <div className="w-50 m-auto mt-5 border bg-dark border-success rounded">
      <div className="card-header h5 text-white bg-primary">Password Reset</div>

      <div className="card-body px-5">
        <p className="card-text py-2">
          Enter your email address and we'll send you an email with instructions
          to reset your password.
        </p>

        <div className="form-outline">
          <input
            type="email"
            id="email"
            className="form-control my-3"
            value={email}
            onChange={setVal}
            placeholder="Enter your email"
          />
          <label className="form-label" for="typeEmail"></label>
        </div>
        <Link to="#" className="btn btn-primary w-20" onClick={sendLink}>
          Reset password
        </Link>

        <div className="d-flex justify-content-between mt-4"></div>
      </div>
    </div>
  );
}
