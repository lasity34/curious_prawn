import React from 'react'
import {  Navigate } from "react-router-dom";

import { useAuth } from "../../AuthContext";


export default function PrivateRoute() {
  return (
    <div>PrivateRoute</div>
  )
}






export default function PrivateRoute({ children }) {

  const { currentUser } = useAuth();



  return currentUser ? children : <Navigate to="/login" />;

}


// Then this for the dashboard element in your app.js: 
<Route path="/"

                element={

                  <PrivateRoute>

                    <Dashboard />

                  </PrivateRoute>

                }

              ></Route>
