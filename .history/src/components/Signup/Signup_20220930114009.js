import {
  Typography,
  FormControl,
  Box,
  Input,
  InputLabel,
} from "@material-ui/core";

import useStyles from "./styles";
const SignUp = () => {

const classes = useStyles()


  return (
    <>
      <Box display='flex' className={classes.container}>
        <Typography variant="h5">Sign Up</Typography>
        <Box display='flex'>
          <FormControl>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              type="email"
              style={{ border: "1px solid black" }}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              style={{ border: "1px solid black" }}
            />
          </FormControl>
        </Box>

        <Box>
          <Typography></Typography>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
