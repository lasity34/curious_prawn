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
import { updateProfile, updateEmail, updatePhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import useStyles from "./styles";

const Profile = () => {
  const classes = useStyles();
  const navigate = useNavigate();


  const isDesktop = useMediaQuery(`(min-width:800px)`);

  const [error, setError] = useState("");

    const [savedProfile, setSaveProfile]

  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    username: "",
    phone: "",
    password: "",
    photo: "",
  });

  useEffect(() => {
    updateProfile(auth.currentUser, {
      displayName: formData.fullname,  photoURL: formData.photo
    });
    updateEmail(auth.currentUser, formData.email)
    updatePhoneNumber(auth.currentUser, formData.phone)
    
    localStorage.setItem('formData', JSON.stringify(formData))
   
  }, [formData]);



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
                />
              </FormControl>
              <FormControl className={classes.formContent}>
                <Input
                  className={classes.formInputPhoto}
                  id="photo"
                  type="file"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
              >
                Update
              </Button>
            </form>

            <Button variant="outlined" className={classes.button}>
              <Link to="../../" className={classes.cancel}>
                Cancel
              </Link>
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Profile;
