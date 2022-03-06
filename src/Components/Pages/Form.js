import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Form = () => {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Paper elevation={4}>
        <Typography variant="h4" padding={1}>
          Form
        </Typography>
        <Box component="form" autoComplete="off">
          <Grid container paddingY={3} paddingX={1} spacing={2}>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                required
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                required
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                required
                id="outlined-basic"
                label="Contact"
                variant="outlined"
                
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                required
                id="outlined-basic"
                label="Email"
                variant="outlined"
                
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                required
                id="outlined-basic"
                label="Education"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2} ms={2}>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Form;
