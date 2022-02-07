import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import { InputBase, Paper, Typography } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import axios from "axios";



export default function StudentList() {
  const [students, setStudents] = useState(()=>{axios.get('https://acharya-placement-dev.herokuapp.com/api/tpo/students/all', {headers:{Authorization:'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxMGM5MGJhNGMzNjYzNTE2ZTA3MDdkMGU5YTg5NDgxMDYyODUxNTgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmFuZGl0aGEgTSIsInJvbGVzIjpbInRwbyJdLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGxhY2VtZW50LXN5c3RlbS1hY2hhcnlhIiwiYXVkIjoicGxhY2VtZW50LXN5c3RlbS1hY2hhcnlhIiwiYXV0aF90aW1lIjoxNjQzOTY0MjEzLCJ1c2VyX2lkIjoic2pBaWFGVER0VlNBazlPbmR4c2hkczhvTmJOMiIsInN1YiI6InNqQWlhRlREdFZTQWs5T25keHNoZHM4b05iTjIiLCJpYXQiOjE2NDM5NjQyMTMsImV4cCI6MTY0Mzk2NzgxMywiZW1haWwiOiJuYW5kaXRoYW1hZGh1c3VkaGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmFuZGl0aGFtYWRodXN1ZGhhQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.H9TSFMoler9AMTVrgjlpQ7my19uDGbeKv9XsQnuyy3MGtgyIszga_EWCXe4Kt6H7JAve5e-Qnx78v35VFDKQKD-0hpR0Flon8cnQVASpBRgWYvjjFI6BwEZ2zju2FMe7F8BU1fQ0Vy21IPL3Pg4fb8j4nxPpadhpbzvn0l7jmqOZjX1-u_PWMOFtaJm3PlzJglBUH3RHwIthyh7b04Uw3BDlsLwTGoluk7AHqR52ulakt_jYrzySOUmyKI07AuvSp0Pb4_9Hd901L0GTMQD6JmQlItugtxT__9RNP6dYFo7HWQnR9DCzEisVaFEJhCpU-O-Y0rCU5FADwkXDcPLuxw'}}) 
  .then(res =>{
    setStudents(res.data.students)
})
.catch(err => {
    console.log(err)
})
}, [])
  
  return (
    <>
      <Typography align="center" variant="h5" gutterBottom component="div">
        STUDENT LIST
      </Typography>

      <Paper
        component="form"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          boxSizing: "border-box",
          marginBottom: "1rem",
        }}
      >
        
        {/* <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <AssignmentIndIcon />
        </IconButton> */}
      </Paper>

      <List
        sx={{
          width: "100%",
          bgcolor: "#DCE3ED",
          maxHeight: 630,
          overflow: "auto",
        }}
        // style={{ maxHeight: "90%", overflow: "auto" }}
      >
        {Array.isArray(students) &&
          students.map((student, index) => (
            <>
              <ListItem
               onClick={()=> window.open("http://localhost:3000/profile?uid="+student.uid,"")}
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemText primary={student.displayName} />
                  <ListItemText primary={student.uid} />
                </ListItemButton>
              </ListItem>
              <br></br>
              {/* <ListItem
                key={index * 2}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemText primary={student.displayName} />
                </ListItemButton>
              </ListItem>
              <ListItem
                key={index * 3}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemText primary={student.displayName} />
                </ListItemButton>
              </ListItem> */}
            </>
          ))}
      </List>
      <br></br>
    </>
  );
}
