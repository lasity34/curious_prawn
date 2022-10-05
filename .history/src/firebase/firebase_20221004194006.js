
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "curious-prawn.firebaseapp.com",
  projectId: "curious-prawn",
  storageBucket: "curious-prawn.appspot.com",
  messagingSenderId: "583213038185",
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export default app