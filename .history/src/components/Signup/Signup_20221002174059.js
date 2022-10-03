import {
  Typography,
  FormControl,
  Box,
  Input,
  InputLabel,
  Button,
  useMediaQuery,
} from "@material-ui/core";

import { useState } from "react";
import { useAuth } from "../../AuthContext";

import useStyles from "./styles";
const SignUp = () => {
  const classes = useStyles();

  const { signup } = useAuth();
  const isDesktop = useMediaQuery(`(min-width:800px)`);

  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    try {
      await signup(formData.email, formData.password);
    }
    catch {

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
            <Typography variant="h4" className={classes.formTitle}>
              Curious Prawn
            </Typography>
            <Typography vairant="subtitle2" className={classes.formSubtitle}>
              Sign up to find your favorite restaurants
            </Typography>
            <Box display="flex" flexDirection="column">
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
                sx={{
                  display: "flex",
                }}
                variant="contained"
                className={classes.button}
              >
                Sign Up
              </Button>
            </Box>

            <Box>
              <Typography>Have an account? Log in</Typography>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default SignUp;
