import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAHVPuCCT1e41rzWSkH8jRcLlSIA3hEv28",
  authDomain: "autohunt-1f665.firebaseapp.com",
  projectId: "autohunt-1f665",
  storageBucket: "autohunt-1f665.appspot.com",
  messagingSenderId: "581597793864",
  appId: "1:581597793864:web:5c681c08b01cbcba6fd27d",
  measurementId: "G-YM1P1SLBJV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
