import React from "react";
import { Box, Card, Typography } from "@mui/material";
import Input from "../../../../ui/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MainButton from "../../../../ui/MainButton";
import Logo from "../../../../components/Logo";
import SocialLoginButton from "@/ui/SocialLoginButton";
import google from "../../../../assets/images/google.png";
import faceBook from "../../../../assets/images/faceBook.png";

function signIn() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#071321",
      }}
    >
      <Card
        sx={{
          width: "400px",
          margin: "20px",
          boxShadow:
            " hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px ",
          border: "1px solid #333b4d99",
          backgroundColor: "#060E17",
          color: "white",
          padding: "32px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Box>
          <Logo />
        </Box>

        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "clamp(2rem, 10vw, 2.15rem)",
            lineHeight: "1.5",
          }}
        >
          Sign up
        </Typography>
        <Input lable={"Full name"} placeholder={"Elnaz Mokhtari"} />
        <Input lable={"Email"} placeholder={"your@emali.com"} />
        <Input lable={"Password"} placeholder={"....."} />

        <FormControlLabel
          control={
            <Checkbox
              sx={{ color: "#333b4d99", "&.Mui-checked": { color: "primary" } }}
            />
          }
          label={
            <Typography sx={{ fontWeight: 400, fontSize: "0.875rem" }}>
              I want to receive updates via email.
            </Typography>
          }
        />

        <MainButton title={"Sign in"} backgroundColor="white" color="black" />

        <div
          style={{
            width: "100%",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            color: "#949FB7",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#333b4d99",
            }}
          ></div>
          <p>or</p>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#333b4d99",
            }}
          ></div>
        </div>

        <SocialLoginButton
          title={"Sign up with Google"}
          backgroundColor="#0b0e14"
          border="1px solid #212632"
          icon={google}
        />
        <SocialLoginButton
          title={"Sign up with FaceBook"}
          backgroundColor="#0b0e14"
          border="1px solid #212632"
          icon={faceBook}
        />
        <Typography
          sx={{ margin: "auto", lineHeight: 1.5, fontSize: "0.875rem" }}
        >
          Already have an account?
          <a href="" style={{ color: "white", marginLeft: "3px" }}>
            Sign in
          </a>
        </Typography>
      </Card>
    </div>
  );
}

export default signIn;
