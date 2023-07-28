import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const auth = getAuth(app);

export { auth };
export default app;

export const db = getFirestore(app);
export const storage = getStorage(app);
