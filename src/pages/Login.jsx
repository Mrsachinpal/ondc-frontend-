import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "../store/AuthContext";
import Alertt from "../components/Alert/Alertt";
import { toast } from 'react-toastify';


const initialState = {
  data: null,
  error: null,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
} 
export default function Login() {
  const api = process.env.REACT_APP_API
  const [email_id, setEmail_id] = useState("");
  const [password, setPassword] = useState(""); 
  const [state, dispatch] = useReducer(reducer, initialState);
  const { error, loading } = state;
  const navigate = useNavigate();
  const { login } = useAuth();

  const postData = async (e) => {
    e.preventDefault();
    dispatch({ type: "REQUEST_LOGIN" });
    try {
      let response = await fetch(
        `${api}login`,
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email_id, password }),
        }
      );
      response = await response.json();
      console.log("response", response);
      if (response.success === true) {
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        toast.success(response.message)
        const token = response.token;
        Cookies.set("token", token, { expires: 7, secure: true });
        login();
        navigate("/dashboard");
     
      } else {
        toast.error(response.message)
        dispatch({ type: "LOGIN_ERROR", error: response.message });
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch({ type: "LOGIN_ERROR", error: error.message });
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          bgcolor: "primary.main",
          padding: "20px",
        }}
      >
        <Box
          component="form"
          onSubmit={postData}
          sx={{
            width: "100%",
            maxWidth: "400px",
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            p: 3,
          }}
        >
          {error && (
            <Alertt variant="filled" severity="error" position="top">
              {error}
            </Alertt>
          )}
      

          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email_id}
            onChange={(e) => setEmail_id(e.target.value)}
            fullWidth
            margin="normal"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="warning" />
            ) : (
              "Login"
            )}
          </Button>
        </Box>
      </Box>
    </>
  );
}
