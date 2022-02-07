import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Card from "@mui/material/Card";
import "./List.css";
import {
  IconButton,
  Input,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

import CommentIcon from "@mui/icons-material/Comment";
import SearchIcon from "@mui/icons-material/Search";
import { useFetch } from "../../hooks/useFetch";
import API from "../../API";
function List() {
  const { content, loading } = useFetch(API.fetchStudents(), "studentsDetails");
  if (loading) {
    return <></>;
  }

  let students = [];
  if (!loading) {
    students = content.students;
  }

  // console.log(`students :`, students);
  // console.log(Array.isArray(students) && students.length >= 1);

  return (
    <div className="card">
      <Card
        sx={{
          height: 450,
          borderRadius: 2,
          boxShadow: 0,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          boxSizing: "border-box",
          marginBottom: "1rem",
        }}
      >
        <div className="List">
          {/* <div className="title">  */}

          <Typography align="center" variant="h5" gutterBottom component="div">
            STUDENT LIST
          </Typography>
          {/* <h2>STUDENT LIST</h2> */}
          <Stack direction="row" justifyContent="space-between">
            <Input placeholder="Search" />
            <SearchIcon />
          </Stack>
          {/* </div>  */}
          <div className="container">
            {Array.isArray(students) &&
              students.map((student, index) => (
                <div key={index} className="content">
                  <div className="text">
                    <p>{student.displayName}</p>
                  </div>
                  <div className="profile">
                    <AssignmentIndIcon />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default List;
