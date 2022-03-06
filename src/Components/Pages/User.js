import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const User = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(users.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users?.length > 0 &&
        users?.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Paper elevation={4}>
              <img
                src="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                alt="background_pic"
                className="img"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhm6uBH9vMMXsliDD9gavCv0KYq6fbS2CXCQf5JI0klWpmnfSUOsFeIRjlDrX84KViK2U&usqp=CAU"
                alt="user_pic"
                className="user_img"
              />
              <Box paddingX={1} sx={{ textAlign: "center" }}>
                <Typography variant="h6" component="h6">
                  {user.name}
                </Typography>
                <Rating
                  name="read-only"
                  value={4.5}
                  precision={0.5}
                  readOnly
                  size="small"
                />
              </Box>
              <Box marginY={3} marginX={1}>
                <Typography variant="subtitle1">
                  Email: {user.email}
                </Typography>
                <Typography variant="subtitle1">
                  Contact: {user.phone}
                </Typography>
                <Typography variant="subtitle1">
                  Website: {user.website}
                </Typography>
              </Box>
              <Box marginY={2} paddingBottom={3}>
                <Grid container sx={{ textAlign: "center" }}>
                  <Grid item xs={4}>
                    <FacebookIcon color="facebook" />
                  </Grid>
                  <Grid item xs={4}>
                    <InstagramIcon color="instagram" />
                  </Grid>
                  <Grid item xs={4}>
                    <TwitterIcon color="twitter" />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        ))}
    </>
  );
};

export default User;
