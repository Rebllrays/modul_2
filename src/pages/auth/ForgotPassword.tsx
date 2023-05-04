import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { useAuth } from "../../contexts/authContext";

import { emailT } from "../../hooks/type";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<emailT>("");
  const { forgotPassword, error, success, setError, setSuccess } = useAuth();
  const [isRechapt, setIsRechapt] = useState<boolean>(false);

  const chapkey = "6LcVa4MkAAAAAGRZEt2zTBIumrqv5mgzAZsNrR4M";

  const handleSave = () => {
    navigate("/choose-login");
    if (!email.trim()) {
      alert("Fill in the fields.");
    }

    if (isRechapt) {
      let formData = new FormData();
      formData.append("email", email);

      forgotPassword(formData);
    } else {
      setError("Get tested!");
    }
  };

  const reChapt = () => {
    setIsRechapt(true);
  };

  useEffect(() => {
    setError("");
    setSuccess("");
  }, []);

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 16 }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "20px",
          borderBottom: "1px solid black",
          paddingBottom: "15px",
          marginBottom: "40px",
        }}
      >
        Forget Password?
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}
      {success ? <Alert>{success}</Alert> : null}

      <TextField
        required
        fullWidth
        sx={{ marginTop: "20px" }}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        label="Email"
        type="text"
        className="mentor-reg__input"
      />

      {success ? (
        <Button
          type="submit"
          onClick={() => navigate("/new-password")}
          fullWidth
          variant="contained"
          className="mentor-reg__btn"
          sx={{ mt: 3, mb: 2, background: "black", borderRadius: "0px" }}
        >
          Reset the password
        </Button>
      ) : (
        <Button
          type="submit"
          onClick={() => handleSave()}
          fullWidth
          variant="contained"
          className="mentor-reg__btn"
          sx={{ mt: 3, mb: 2, background: "#000", borderRadius: "00px" }}
        >
          Submit an inquiry
        </Button>
      )}

      <Typography
        sx={{ textAlign: "center", fontSize: "17px", fontWeight: "600" }}
      >
        Or
      </Typography>
      <Button
        type="submit"
        onClick={() => navigate("/choose-login")}
        fullWidth
        variant="contained"
        className="forgot-password__btn"
        sx={{ mt: 3, mb: 2, borderRadius: "0px", background: "#8e7cc3" }}
      >
        Login
      </Button>
    </Container>
  );
};

export default ForgotPassword;
