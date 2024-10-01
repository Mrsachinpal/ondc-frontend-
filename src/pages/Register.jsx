import { useState } from "react";
import Cookies from 'js-cookie';
import React from "react";
import {
  Paper,
  Typography,
  Box,
  Grid,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Select,
  MenuItem,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email_id, setEmail_Id] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage("");
  };

  const postData = async (event) => {
    event.preventDefault();
   

    setLoading(true);

    const jsonData = { first_name, last_name, email_id, password, role };

    try {
      const response = await fetch(`${process.env.REACT_APP_API}Register`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();

      if (data.success === true) {
        const token = data.token;
        Cookies.set('registered', true);
        Cookies.set('token', token, { expires: 1, secure: true });
        navigate("/");
      } else {
        setSnackbarMessage(data.message || "Registration failed.");
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarMessage("Failed to register. Please try again later.");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (

    <>

      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f2f5",
          padding: "20px",
         
        }}
      >
        <Paper elevation={10} sx={{ maxWidth: 600, padding: "20px" }}>
          <Stack spacing={3}>
            <Typography variant="h4" align="center">Registration Form</Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="First Name"
                  type="text"
                  value={first_name}
                  onChange={(event) => setFirst_Name(event.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Last Name"
                  type="text"
                  value={last_name}
                  onChange={(event) => setLast_Name(event.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email"
                  type="email"
                  value={email_id}
                  onChange={(event) => setEmail_Id(event.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="role-select">Role</InputLabel>
                  <Select
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                    label="Role"
                    inputProps={{
                      id: "role-select"
                    }}
                    required
                  >
                    <MenuItem value="super admin">SuperAdmin</MenuItem>
                    <MenuItem value="super admin staff">SuperAdminStaff</MenuItem>
                    <MenuItem value="super admin dev">SuperAdminDev</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  onClick={postData}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Paper>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </>
  );
}
