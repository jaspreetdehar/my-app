// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCBNedkCXveNKHz9VUQMjJBmygrocil3tg",
  authDomain: "rackron-login.firebaseapp.com",
  projectId: "rackron-login",
  storageBucket: "rackron-login.appspot.com",
  messagingSenderId: "300700322476",
  appId: "1:300700322476:web:88396c962e6ecd1154ed09",
  measurementId: "G-72591NM2TV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const pic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("pic", pic);

    })
    .catch((err) => {
      console.log(err);
    });
};
export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("pic");
    })
    .catch((err) => {
      console.log(err);
    });
};