import React from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ProfileButton = styled(Button)(({ theme }) => ({
  marginBottom: "15px",
  textTransform: "none",
  borderRadius: "10px",
  background: "#1E4786",
  color: "white",
}));

const Buttonss =()=>{
  return (
    <>
    
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="column" justify-justifyContent="space-evenly">
            
            <ProfileButton
              variant="contained"
              onClick={event => window.location.href='http://localhost:3000/StudentList'}
            >
              VIEW STUDENT LIST
            </ProfileButton>

            <ProfileButton
              variant="contained"
              onClick={event => window.location.href='http://localhost:3000/Companyform'}
            >
              NEW DRIVE
            </ProfileButton>
            <ProfileButton
              variant="contained"
              onClick={event => window.location.href='http://localhost:3000/ApplicantsList'}
            >
              VIEW APPLICANTS
            </ProfileButton>
            {/* <Button
            onClick={() => setopenStudentList(!openStudentList)}
            title="VIEW STUDENT LIST"
            />
            <Button title="ADD COURSES" />
          <Button title="ADD COMPANY" /> */}
          </Stack>
        </Stack>
      
    </>
  )
}

export default Buttonss;
