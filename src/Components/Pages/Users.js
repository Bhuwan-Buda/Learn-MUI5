import React from "react";
import Grid from "@mui/material/Grid";
import User from "./User";
import Container from "@mui/material/Container";

const Users = () => {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Grid container spacing={3}>
        <User />
      </Grid>
    </Container>
  );
};

export default Users;
