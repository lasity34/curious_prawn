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
  import { useState } from "react";
  import { useAuth } from "../../AuthContext";
  
  import useStyles from "./styles";
  
  const Profile = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { signUp } = useAuth();
    const isDesktop = useMediaQuery(`(min-width:800px)`);
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const [formData, setFormData] = useState({
      email: "",
      fullname: "",
      username: "",
      phone: "",
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
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
        setError("");
  
        await signUp(formData.email, formData.password);
        navigate("/");
      } catch (error) {
        setError(error.message);
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
              {error && <p>{error}</p>}
              <Typography variant="h4" className={classes.formTitle}>
                Update Profile
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
                <FormControl className={classes.formContent}>
                  <InputLabel htmlFor="phone">Phone</InputLabel>
                  <Input
                    className={classes.formInput}
                    id="phone"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
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
                  Update
                </Button>
              </form>
  
              <Button>
                <Link to='../../'>Cancel</Link>
              </Button>
            </Box>
          </div>
        </div>
      </>
    );
  };
  
  export default Profile;
