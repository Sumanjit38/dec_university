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
import StudentSignin from './StudentSignin'
import { useState } from 'react';
import { useHistory } from 'react-router';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function StudentSignup() {

  const history = useHistory()

  const [user, setUser] = useState({
    sname : "",
    universityCode : "",
    regNo : "",
    rollNo : "",
    phoneNo : "",
    email : "",
    password : "",
  });

  // Handle Inputs
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user, [name]:value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {sname : sname, universityCode : universityCode, regNo : regNo, rollNo : rollNo, phoneNo : phoneNo, email : email, password : password} = user;
    try {
      const res = await fetch('/register', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          sname : sname, universityCode : universityCode, regNo : regNo, rollNo : rollNo, phoneNo : phoneNo, email : email, password : password
        })
      })

      if(res.status === 400 || !res) {
        window.alert("Already Used Details")
      } else {
        window.alert("Registered Successfully");
        history.push('/login')
      }

    } catch (error) {
        console.log(error);
    }
    /*const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });*/
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} method="POST" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  
                  name="sname"
                  required
                  fullWidth
                  id="sname"
                  label="Name"
                  autoFocus
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="universityCode"
                  label="University Code"
                  name="universityCode"
                  autoComplete="universityCode"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="regNo"
                  label="Registration No"
                  name="regNo"
                  autoComplete="regNo"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="rollNo"
                  label="Roll No"
                  name="rollNo"
                  autoComplete="rollNo"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNo"
                  label="Phone No"
                  name="phoneNo"
                  autoComplete="phoneNo"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I accept all terms & conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
                <Link href="/student_signin" variant="StudentSignin">
                  Already have an account? Sign in
                  
                </Link>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}