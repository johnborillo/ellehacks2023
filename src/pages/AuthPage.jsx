import React,{useState} from 'react'
import { Box,Fade,FormControlLabel,Switch, Button,TextField } from '@mui/material';

const AuthPage = () => {
  const [signUp, setSignUp]=useState(false)
  const handleChange = () => {
    setSignUp((prev) => !prev)
  };

  const sumbitHandler=async(e)=>{
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    console.log(data) 
    if(signUp){

    }else{
      
    }
  }

  return (
    <Box sx={{
      margin:"0 auto",      
      width:"60%"
    }}>
      <FormControlLabel
        control={<Switch checked={signUp} onChange={handleChange} />}
        label="Sign Up"
      />
      <Box component="form" noValidate onSubmit={sumbitHandler} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <Fade in={signUp}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
          />
        </Fade>
        <Button 
          variant="contained" 
          type="submit" 
          fullWidth 
          sx={{ mt: 3, mb: 2 }}
        >Submit</Button>
      </Box>
    </Box>
    
  )
}

export default AuthPage