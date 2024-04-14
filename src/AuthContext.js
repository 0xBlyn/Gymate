import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARMjMd6JhyBPDVfFs_KVGnN3CPcCKX92U",
  authDomain: "gymate-1.firebaseapp.com",
  projectId: "gymate-1",
  storageBucket: "gymate-1.appspot.com",
  messagingSenderId: "670937545866",
  appId: "1:670937545866:web:efe9353df2929989d08173",
  measurementId: "G-CW6G7RPN7E"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Create AuthContext
const AuthContext = createContext();

// AuthContextProvider component
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // Sign up function
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db, "users", user.uid), {
          email: user.email,
          savedShows: [],
        });
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  }

  // Log in function
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Log out function
  function logOut() {
    return signOut(auth);
  }

  // Effect to listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  // Provide the context value to children components
  return (
    <AuthContext.Provider value={{ signUp, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
