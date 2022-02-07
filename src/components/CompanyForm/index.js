import React, { useEffect } from "react";
import { useState } from "react";
import { Form, useForm } from "./../Forms/";
import { FormControls } from '../FormControls/index';
import {
  Button,
  Card,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from 'axios';

const initialValues = {
  companyName: "",
  designation: "",
  jobDesc: "",
  contactNo: "",
  email: "",
  venue: "",
  noOfRounds: "",
  isXMarks: false,
  XMarks: "",
  isXIIMarks: false,
  XIIMarks: "",
  isUniversityMarks: false,
  UniversityMarks: "",
  isBacklogs: false,
  Backlogs: "",
};

const CompanyForm = () => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("companyName" in fieldValues)
      temp.companyName = fieldValues.companyName
        ? ""
        : "Company Name  is required";
    if ("designation" in fieldValues)
      temp.Designation = fieldValues.Designatio
        ? ""
        : "designation is required";
    if ("jobDesc" in fieldValues)
      temp.jobDesc = fieldValues.jobDesc ? "" : "jobDesc is required";
    if ("contactNo" in fieldValues)
      temp.Contact = fieldValues.Contact ? "" : "contactNo is required";
    if ("email" in fieldValues)
      temp.email = fieldValues.email ? "" : "Email is required";
    if ("venue" in fieldValues)
      temp.venue = fieldValues.companyName ? "" : "venue is required";
    if ("companyName" in fieldValues)
      temp.companyName = fieldValues.companyName
        ? ""
        : "Company Name name is required";
    if ("companyName" in fieldValues)
      temp.companyName = fieldValues.companyName
        ? ""
        : "Company Name name is required";
    if ("companyName" in fieldValues)
      temp.companyName = fieldValues.companyName
        ? ""
        : "Company Name name is required";

    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialValues, true, validate);
  const handleSubmit = (e) => {
    e.preventDefault();
   
    let requestobject={
      companyName: values.companyName,
      designation: values.designation,
      jobDesc: values.jobDesc,
      contactNo: values.contactNo,
      email: values.email,
      venue: values.venue,
      noOfRounds: values.noOfRounds,
      
      eligibility:{
        marks:{
          X:{
            required:values.isXMarks,
            minMarks:values.XMarks
          },
          XII:{
            required:values.isXIIMarks,
            minMarks:values.XIIMarks
          },
          university:{
            required:values.isUniversityMarks,
            minMarks:values.UniversityMarks
          },
        },
        backHistory:values.isBacklogs,
        noOfBacks:{required:values.isBacklogs,
                    maxBacks:values.Backlogs}

      }
    }
    axios.post('https://acharya-placement-dev.herokuapp.com/api/tpo/job/post' ,requestobject,{headers:{Authorization:'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxMGM5MGJhNGMzNjYzNTE2ZTA3MDdkMGU5YTg5NDgxMDYyODUxNTgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmFuZGl0aGEgTSIsInJvbGVzIjpbInRwbyJdLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGxhY2VtZW50LXN5c3RlbS1hY2hhcnlhIiwiYXVkIjoicGxhY2VtZW50LXN5c3RlbS1hY2hhcnlhIiwiYXV0aF90aW1lIjoxNjQzOTY0MjEzLCJ1c2VyX2lkIjoic2pBaWFGVER0VlNBazlPbmR4c2hkczhvTmJOMiIsInN1YiI6InNqQWlhRlREdFZTQWs5T25keHNoZHM4b05iTjIiLCJpYXQiOjE2NDM5NjQyMTMsImV4cCI6MTY0Mzk2NzgxMywiZW1haWwiOiJuYW5kaXRoYW1hZGh1c3VkaGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmFuZGl0aGFtYWRodXN1ZGhhQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.H9TSFMoler9AMTVrgjlpQ7my19uDGbeKv9XsQnuyy3MGtgyIszga_EWCXe4Kt6H7JAve5e-Qnx78v35VFDKQKD-0hpR0Flon8cnQVASpBRgWYvjjFI6BwEZ2zju2FMe7F8BU1fQ0Vy21IPL3Pg4fb8j4nxPpadhpbzvn0l7jmqOZjX1-u_PWMOFtaJm3PlzJglBUH3RHwIthyh7b04Uw3BDlsLwTGoluk7AHqR52ulakt_jYrzySOUmyKI07AuvSp0Pb4_9Hd901L0GTMQD6JmQlItugtxT__9RNP6dYFo7HWQnR9DCzEisVaFEJhCpU-O-Y0rCU5FADwkXDcPLuxw' }})
    .then(res=>{
      if(res.data.success){
        alert("Job Posted");
      }
    }
    ).catch(err=>{
      alert("Failed to Create Job")
    })
    console.log((values));
    // if (validate()) {
    // } else alert("invalid");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" style={{ position: "absolute", top: "65px" }}>
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
                onChange={handleInputChange}
                name="companyName"
                value={values.companyName}
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
                onChange={handleInputChange}
                name="designation"
                value={values.designation}
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
                onChange={handleInputChange}
                name="jobDesc"
                value={values.jobDesc}
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
                value={values.contactNo}
                name="contactNo"
                onChange={handleInputChange}
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
                name="email"
                onChange={handleInputChange}
                value={values.email}
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
                onChange={handleInputChange}
                name="venue"
                value={values.venue}
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
                onChange={handleInputChange}
                value={values.noOfRounds}
                name="noOfRounds"
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
              // color="success"
              onChange={handleInputChange}
              style={{ position: "absolute", top: "460px" }}
              value={values.isXMarks}
              name="isXMarks"
            ></Checkbox>
            {values.isXMarks ? (
              <TextField
                variant="outlined"
                onChange={handleInputChange}
                value={values.XMarks}
                name="XMarks"
                label="XMarks"
                style={{
                  position: "absolute",
                  top: "460px",
                  left: "502px",
                  width: 226,
                }}
              ></TextField>
            ) : (
              <></>
            )}
            <Typography
              style={{ position: "absolute", top: "470px", left: "40px" }}
            >
              10th Percentage
            </Typography>
            <Checkbox
              // color="success"
              style={{ position: "absolute", top: "510px" }}
              onChange={handleInputChange}
              value={values.isXIIMarks}
              name="isXIIMarks"
            ></Checkbox>
            {values.isXIIMarks ? (
              <TextField
                variant="outlined"
                onChange={handleInputChange}
                value={values.XIIMarks}
                name="XIIMarks"
                label="XIIMarks"
                style={{
                  position: "absolute",
                  top: "510px",
                  left: "502px",
                  width: 226,
                }}
              ></TextField>
            ) : (
              <></>
            )}
            <Typography
              style={{ position: "absolute", top: "520px", left: "40px" }}
            >
              12th Percentage
            </Typography>
            <Checkbox
              // color="success"
              onChange={handleInputChange}
              value={values.isUniversityMarks}
              name="isUniversityMarks"
              style={{ position: "absolute", top: "560px" }}
            ></Checkbox>
            {values.isUniversityMarks ? (
              <TextField
                variant="outlined"
                onChange={handleInputChange}
                value={values.UniversityMarks}
                name="UniversityMarks"
                label="UniversityMarks"
                style={{
                  position: "absolute",
                  top: "560px",
                  left: "502px",
                  width: 226,
                }}
              ></TextField>
            ) : (
              <></>
            )}
            <Typography
              style={{ position: "absolute", top: "570px", left: "40px" }}
            >
              University Marks
            </Typography>
            <Checkbox
              // color="success"
              onChange={handleInputChange}
              value={values.isBacklogs}
              name="isBacklogs"
              style={{ position: "absolute", top: "610px" }}
            ></Checkbox>
            {values.isBacklogs ? (
              <TextField
                variant="outlined"
                onChange={handleInputChange}
                value={values.Backlogs}
                name="Backlogs"
                label="Backlogs"
                style={{
                  position: "absolute",
                  top: "610px",
                  left: "502px",
                  width: 226,
                }}
              ></TextField>
            ) : (
              <></>
            )}
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
              Submit
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={resetForm}
              style={{ position: "absolute", top: "660px", left: "300px" }}
            >
              Reset
            </Button>
          </Grid>
          {}
        </Card>
      </div>
    </Form>
  );
};
export default CompanyForm;
