import React, { useState, useEffect } from "react";
// import Navbar2 from '../components/Navbar2/Navbar2';
import {
  Button,
  Card,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { width } from "@mui/system";

const initialFValues = {
  companyName: "",
  jobTitle: "",
  jobDesc: "",
  contact: "",
  email: "",
  venue: "",
  rounds: "",
};
export default function Companyform() {
  const [FormValues, setValues] = useState(initialFValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
    // console.log(FormValues);
  };
  return (
    <>
      {/* <Navbar2/> */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h6"
            style={{ position: "absolute", top: "65px" }}
          >
            NEW DRIVE DETAILS
          </Typography>
          <Card
            style={{
              width: 750,
              height: 750,
              position: "absolute",
              top: "100px",
            }}
          >
            <Grid container>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="COMPANY NAME"
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "10px",
                    width: 720,
                  }}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="JOB TITLE"
                  style={{
                    position: "absolute",
                    top: "90px",
                    left: "10px",
                    width: 720,
                  }}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="JOB DESRIPTION"
                  multiline
                  maxRows={3}
                  minRows={3}
                  style={{
                    position: "absolute",
                    top: "160px",
                    left: "10px",
                    width: 720,
                    height: 160,
                  }}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="CONATCT"
                  style={{
                    position: "absolute",
                    top: "270px",
                    left: "10px",
                    width: 226,
                  }}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="EMAIL"
                  style={{
                    position: "absolute",
                    top: "270px",
                    left: "250px",
                    width: 480,
                  }}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="VENUE"
                  style={{
                    position: "absolute",
                    top: "340px",
                    left: "10px",
                    width: 480,
                  }}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="NO. OF ROUNDS"
                  style={{
                    position: "absolute",
                    top: "340px",
                    left: "502px",
                    width: 226,
                  }}
                ></TextField>
              </Grid>
              <Typography
                variant="h6"
                style={{ position: "absolute", top: "410px", left: "10px" }}
              >
                SET ELIGIBILITY
              </Typography>
              <Checkbox
                color="success"
                style={{ position: "absolute", top: "460px" }}
              ></Checkbox>
              <Typography
                style={{ position: "absolute", top: "470px", left: "40px" }}
              >
                10th Percentage
              </Typography>
              <Checkbox
                color="success"
                style={{ position: "absolute", top: "510px" }}
              ></Checkbox>
              <Typography
                style={{ position: "absolute", top: "520px", left: "40px" }}
              >
                12th Percentage
              </Typography>
              <Checkbox
                color="success"
                style={{ position: "absolute", top: "560px" }}
              ></Checkbox>
              <Typography
                style={{ position: "absolute", top: "570px", left: "40px" }}
              >
                Average CGPA
              </Typography>
              <Checkbox
                color="success"
                style={{ position: "absolute", top: "610px" }}
              ></Checkbox>
              <Typography
                style={{ position: "absolute", top: "620px", left: "40px" }}
              >
                Backlog History
              </Typography>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ position: "absolute", top: "660px", left: "10px" }}
              >
                ADD COMAPNY
              </Button>
            </Grid>
          </Card>
        </div>
      </form>
    </>
  );
}
