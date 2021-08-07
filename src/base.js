import { firebase } from "@firebase/app";
import "@firebase/auth";
import 'firebase/storage';

// export firebase connection 
export const base = firebase.initializeApp({
  "projectId": "geebimages",
  "appId": "1:305287803489:web:1b61c7400a51983347f020",
  "storageBucket": "geebimages.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyDs7fChoXk-5xho2ztBRuEnLF5FstXgMpA",
  "authDomain": "geebimages.firebaseapp.com",
  "messagingSenderId": "305287803489",
  "measurementId": "G-LSJCV476J8"
});

export const auth = firebase.auth();
