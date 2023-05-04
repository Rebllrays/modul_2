import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const OneQuestions: React.FC = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  console.log(user);

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
        <h1>Share your knowledge</h1>
        <p style={{ width: "50vw" }}>
          Udemy courses are video-based experiences that give students the
          chance to learn actionable skills. Whether you have experience
          teaching, or it’s your first time, we’ll help you package your
          knowledge into an online course that improves student lives.
        </p>

        <h2>What kind of teaching have you done before?</h2>

        <div className="questions-block">
          <RadioGroup
            className="questions-block"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser({
                ...user,
                type: e.target.value,
              })
            }
          >
            <FormControlLabel
              className="questions-block__label"
              value={"individual not oficial"}
              control={<Radio />}
              label={"In person, informally"}
            />
            <FormControlLabel
              className="questions-block__label"
              value={"individual prof"}
              control={<Radio />}
              label={"In person, profesionally"}
            />
            <FormControlLabel
              className="questions-block__label"
              value={"online"}
              control={<Radio />}
              label={"Online"}
            />
            <FormControlLabel
              className="questions-block__label"
              value={"other"}
              control={<Radio />}
              label={"Other"}
            />
          </RadioGroup>

          {!user.type.trim() ? (
            <Button disabled sx={{marginRight: "20px"}}>Continue</Button>
          ) : (
            <Button onClick={() => navigate("/questions-2")}>Continue</Button>
          )}
        </div>
      </Grid>
    </Container>
  );
};

export default OneQuestions;
