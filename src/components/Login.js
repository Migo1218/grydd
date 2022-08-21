import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    TextField,
    Typography,
  } from "@mui/material";
import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from "sweetalert2";
import { setUserData } from '../store/slices/loginSlice';
import { useDispatch } from 'react-redux';



const Login = () => {

  const redirectToDashboard = useNavigate()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (data, {resetForm}) => {
      console.log(data);
      axios
        .post("http://localhost:4000/api/auth/login", {
          email: data.email,
          password: data.password,
        })
        .then(function (response) {
          
          const userData = response.data;
          
         
          dispatch(setUserData(userData));
          redirectToDashboard("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Credenciales Inválidas",
            showConfirmButton: false,
            showDenyButton: true,
            denyButtonText: `Aceptar`,
          });
          
        });
      resetForm()
    }
  })
  return (
    <div>
        <Container component="main" maxWidth="xs" sx={{ boxShadow: 3 }}>
        <CssBaseline />
        <Box
         pb={5}
         pt="20%"
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={formik.values.email}
                    onChange={formik.handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
                  onChange={formik.handleChange}
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
           
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </div>
  )
}

export default Login