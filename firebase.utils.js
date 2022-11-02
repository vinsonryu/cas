import { getFirestore,collection,addDoc,doc, getDoc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCYCrdoYrrcoBg_zF2tVv2ZbeDwdEZzPqM",
  authDomain: "cas-education.firebaseapp.com",
  projectId: "cas-education",
  storageBucket: "cas-education.appspot.com",
  messagingSenderId: "585499693951",
  appId: "1:585499693951:web:e61d582595f019c9c8004a",
  measurementId: "G-515DEFWBP5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addCustomer = async (email,username)=> {
    const date = new Date();
    const docRef = doc(db,'customers',email);
    const docSnap = await getDoc(docRef);
    if(!(docSnap.exists())){
        setDoc(docRef,{
            createdAt : date,
            email: email,
            username: username
        });
    }
}