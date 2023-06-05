import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAPT4ZZ5BzpCpvvOdaK26z0dkhZQSTwzjE',
  authDomain: 'gunsence-50da2.firebaseapp.com',
  projectId: 'gunsence-50da2',
  storageBucket: 'gunsence-50da2.appspot.com',
  messagingSenderId: '1034674970596',
  appId: '1:1034674970596:web:931caf66e23e5a561971f1',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocument = async (userAuth, userInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const createdAt = new Date().toISOString();
    try {
      await setDoc(userDocRef, {
        createdAt,
        ...userInfo,
      });
    } catch (error) {
      alert('error creating user:>> ', error.message);
    }
  }
  return userDocRef;
};

export const getUserDataFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  return { id: userSnapshot.id, ...userSnapshot.data() };
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert('error creating user: ', error.code, error.message);
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
