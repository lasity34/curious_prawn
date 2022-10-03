import {
  Typography,
  FormControl,
  Box,
  Input,
  InputLabel, Button,
  useMediaQuery
} from "@material-ui/core";

import useStyles from "./styles";
const SignUp = () => {
  const classes = useStyles();

  const isDesktop = useMediaQuery(`(min-width:800px)`);


  return (



    <>
      <Box display="flex" flexDirection="column" className={classes.container} style={{ width: isDesktop ? "25%" : '60%'}}>
        <Box className={classes.contentContainer} >
          <Typography variant="h4">Curious Prawn</Typography>
          <Typography vairant="subtitle2" color="grey">
            Sign up to find your favorite restaurants
          </Typography>
          <Box display="flex" flexDirection="column">
            <FormControl className={classes.formContent}>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input className={classes.formInput} id="email" type="email" />
            </FormControl>
            <FormControl className={classes.formContent}>
              <InputLabel htmlFor="fullname">Full Name</InputLabel>
              <Input className={classes.formInput} id="fullname" type="text" />
            </FormControl>
            <FormControl className={classes.formContent}>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                className={classes.formInput}
                id="username"
                type="text"
              
              />
            </FormControl>
            <FormControl className={classes.formContent}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                className={classes.formInput}
                id="password"
                type="password"
        
              />
            </FormControl>
            <Button variant="contained" className={classes.button}>
                Sign Up
            </Button>
          </Box>

          <Box>
            <Typography></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
