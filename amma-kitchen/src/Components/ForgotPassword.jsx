import React from "react";
import { Grid, TextField, Button } from "@mui/material";

const ForgotPassword = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        {/* Image */}
      </Grid>
      <Grid item xs={6}>
        <TextField label="Enter Email" fullWidth />
        <TextField label="Enter OTP" fullWidth />
        <TextField label="New Password" type="password" fullWidth />
        <Button variant="contained" color="primary">
          Change Password
        </Button>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
