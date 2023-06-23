import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAiDoqjrYjcikKhlXXJsnLuGKtMKgVQp84",
  authDomain: "hackathon-cfc4c.firebaseapp.com",
  projectId: "hackathon-cfc4c",
  storageBucket: "hackathon-cfc4c.appspot.com",
  messagingSenderId: "719601727439",
  appId: "1:719601727439:web:13657a4943569ee68784ba",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
