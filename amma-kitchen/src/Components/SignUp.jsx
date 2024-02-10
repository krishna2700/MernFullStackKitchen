import React from "react";
import { Grid, TextField, Button, MenuItem } from "@mui/material";

const SignUp = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        {/* Image */}
      </Grid>
      <Grid item xs={6}>
        <TextField select label="Register as" fullWidth>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="mom">Mom</MenuItem>
          <MenuItem value="customer">Customer</MenuItem>
        </TextField>
        <TextField label="Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Phone" fullWidth />
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignUp;
