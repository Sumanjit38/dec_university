import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TeacherSignup from './UniversitySignup'
import { useState } from 'react';
import {useHistory} from 'react-router-dom';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function UniversitySignin() {

  let history = useHistory()
  const [user, setUser] = useState({
    email : "",
    password : "",
  });

    // Handle Inputs
    const handleInput = (event) => {
      //let name = event.target.name;
      //let value = event.target.value;
  
      setUser({...user, [event.target.name]:event.target.value});
    }
  
    // Handle Submit
    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await fetch("/register/university-login", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({email:user.email, password:user.password})
  
      })
      const json = await response.json()
      console.log(json);
  
      if(!json.success) {
        alert("Enter Valid Credentials")
      }
      if(json.success) {
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"))
        history.push('/university_dashboard');
      }
      
   };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInput}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInput}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                
                <Link href="/university_signup" variant="UniversitySignup">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}