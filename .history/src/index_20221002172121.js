import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup/Signup.js";
import App from "./App.js";
import { AuthProvider} from './AuthContext'

ReactDOM.render(<AuthProvider><BrowserRouter>
<Routes>
<Route path="/Signup/Signup" element={<SignUp />} />
<Route path="/" element={<App />} />

</Routes>

</BrowserRouter>, document.getElementById("root"));
</AuthProvider>)