import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

const Homepage = () => {
  return (
  <Container sx={{ marginTop: 10 }}>
    <Box>
      <Typography variant="h1">
        This is our homepage.
      </Typography>
    </Box>
  </Container>
  );
};

export default Homepage;
