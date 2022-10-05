import {
  Typography,
  FormControl,
  Box,
  Input,
  InputLabel,
  Button,
  useMediaQuery,
  
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext";

import useStyles from "./styles";
import {  getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { tableFooterClasses } from "@mui/material";
const SignUp = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const { signUp} = useAuth();
  const isDesktop = useMediaQuery(`(min-width:800px)`);
  const auth = getAuth();
  const [ loading, setLoading] = useState(false)
  const [ error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

 const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'www.myDomain.com',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };
  


 function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('')
    
      await sendSignInLinkToEmail(auth, formData.email, actionCodeSettings)
      await signUp(formData.email, formData.password);

     
    
    }
    catch(error){
      setError(error.message)
     
    }
  
  }


  return (
    <>
      <div className={classes.signUpBody}>
        <div
          className={classes.signContainer}
          style={{ width: isDesktop ? "25%" : "66%" }}
        >
          <Box className={classes.contentContainer}>
         
            { error && <p>{error}</p>}
            <Typography variant="h4" className={classes.formTitle}>
              Curious Prawn
            </Typography>
            <Typography vairant="subtitle2" className={classes.formSubtitle}>
              Sign up to find your favorite restaurants
            </Typography>
            <form display="flex" flexdirection="column" onSubmit={handleSubmit}>
              <FormControl className={classes.formContent}>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  className={classes.formInput}
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required

                />
              </FormControl>
              <FormControl className={classes.formContent}>
                <InputLabel htmlFor="fullname">Full Name</InputLabel>
                <Input
                  className={classes.formInput}
                  id="fullname"
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  value={formData.fullname}
                  required
                />
              </FormControl>
              <FormControl className={classes.formContent}>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  className={classes.formInput}
                  id="username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                  required
                />
              </FormControl>
              <FormControl className={classes.formContent}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  className={classes.formInput}
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
              </FormControl>
              <Button
              type="submit"
                sx={{
                  display: "flex",
                }}
                variant="contained"
                className={classes.button}
                disabled={loading}
              >
                Sign Up
              </Button>
            </form>

            <Box>
              <Typography>Have an account? <Link to="../Login" className={classes.link} > Log in </Link></Typography>
            </Box>
          </Box>

        </div>
      </div>
    </>
  );
};

export default SignUp;
