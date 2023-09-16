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
import TeacherSignin from './TeacherSignin'
import { useState } from 'react';
import { useHistory } from 'react-router';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function TeacherSignup() {

  const history = useHistory()

  const [user, setUser] = useState({
    tname : "",
    universityCode : "",
    phoneNo : "",
    email : "",
    password : "",
  });

  // Handle Inputs
  const handleInput = (event) => {
    setUser({...user, [event.target.name]:event.target.value});
  }

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/register/teacher", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({tname:user.tname, universityCode:user.universityCode, phoneNo:user.phoneNo, email:user.email, password:user.password})

    })
    const json = await response.json()
    console.log(json);

    if(!json.success) {
      alert("Enter Valid Credentials")
    }
    if(json.success) {
      history.push('/teacher_signin');
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} method="POST" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  
                  name="tname"
                  required
                  fullWidth
                  id="tname"
                  label="Name"
                  autoFocus
                  value={user.tname}
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
                  value={user.universityCode}
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
                  value={user.phoneNo}
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
                  value={user.email}
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
                  value={user.password}
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
                
                <Link href="/teacher_signin" variant="TeacherSignin">
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
