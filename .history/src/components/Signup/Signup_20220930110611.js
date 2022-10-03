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
        <Box>
          <Typography variant="h2">Sign Up</Typography>
          <FormControl>
                <InputLabel htmlFor="email">Email Address</InputLabel>
`               `<Input is="email"  />
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
