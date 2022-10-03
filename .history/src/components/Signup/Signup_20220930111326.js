import { 
    Typography,
     FormControl,
      Box,
      Input,
      InputLabel
     } from "@material-ui/core";

const SignUp = () => {
  return (
    <>
      <Box>
          <Typography variant="h5">Sign Up</Typography>
        <Box>
          <FormControl>
                <InputLabel htmlFor="email">Email Address</InputLabel>
`               `<Input is="email"  style={{ border: "1px solid black"}}/>
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
