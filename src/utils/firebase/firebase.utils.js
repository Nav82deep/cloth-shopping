import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
const firebaseConfig = {
  apiKey: "AIzaSyAdD-63CfeCIlKJ11bdq32ymkBMorD_-9o",
  authDomain: "crwn-clothing-db-d0841.firebaseapp.com",
  projectId: "crwn-clothing-db-d0841",
  storageBucket: "crwn-clothing-db-d0841.appspot.com",
  messagingSenderId: "411743462026",
  appId: "1:411743462026:web:3731fb6e81b4f3c7fa8373",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

const db = getFirestore();

export const creatUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      alert(error.code);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!password || !email) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
