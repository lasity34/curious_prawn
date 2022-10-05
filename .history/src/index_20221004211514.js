import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import App from "./App.js"
import { AuthProvider } from "./AuthContext";
import Profile from "./pages/Profile/Profile.jsx";
import { firebase } from "./firebase/firebase";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        <Route path="/updateProfile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route
          path="/*"
          element={

              <App />
   
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
