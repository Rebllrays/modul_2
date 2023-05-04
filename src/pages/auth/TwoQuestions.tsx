import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const TwoQuestions: React.FC = () => {
  const { user, setUser, mentorRegister } = useAuth();
  const navigate = useNavigate();
  console.log(user);

  const handleSave = () => {
    let formData = new FormData();
    formData.append("email", user.email);
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("password", user.password);
    formData.append("password2", user.password2);
    formData.append("type", user.type);
    formData.append("experience", user.experience);
    formData.append("audience", user.audience);

    mentorRegister(formData);
    navigate("/");
  };

  return (
    <Container>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "80vh",
          justifyContent: "center",
        }}
      >
        <h1>Expand your reach</h1>
        <p style={{ width: "50vw" }}>
          Once you publish your course, you can grow your student audience and
          make an impact with the support of Udemy's marketplace promotions and
          also through your own marketing efforts. Together, we’ll help the
          right students discover your course.
        </p>

        <h2>Do you have an audience to share your course with?</h2>

        <div className="questions-block">
          <RadioGroup
            className="questions-block"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser({
                ...user,
                audience: e.target.value,
              })
            }
          >
            <FormControlLabel
              className="questions-block__label"
              value={"no"}
              control={<Radio />}
              label={"Not at the moment"}
            />
            <FormControlLabel
              className="questions-block__label"
              value={"a few"}
              control={<Radio />}
              label={"I have a small following"}
            />
            <FormControlLabel
              className="questions-block__label"
              value={"a lot"}
              control={<Radio />}
              label={"I have a sizeable following"}
            />
          </RadioGroup>

          {!user.audience.trim() ? (
            <Button disabled>Sign Up</Button>
          ) : (
            <Button onClick={() => handleSave()}>Sign Up</Button>
          )}
        </div>
      </Grid>
    </Container>
  );
};

export default TwoQuestions;
