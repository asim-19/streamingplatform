import { initializeApp } from "firebase/app";
import {
     createUserWithEmailAndPassword,
     getAuth, 
     signInWithEmailAndPassword, 
     signOut} from "firebase/auth";
import { addDoc,
       collection,
        getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAJuj0uV3SA8qFZOu4uwSYI8nO36FRJJ7M",
  authDomain: "n-flix-ac2fb.firebaseapp.com",
  projectId: "n-flix-ac2fb",
  storageBucket: "n-flix-ac2fb.appspot.com",
  messagingSenderId: "850911052387",
  appId: "1:850911052387:web:eb6b9cad66931dbc4cee56"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
    });
  } catch (error) {
     console.log(error);
     toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);

}

export {auth, db, login, signup, logout}; 