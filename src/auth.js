import { createUserWithEmailAndPassword } from "@firebase/auth";
import {auth} from "./config";
import {db} from "./config";
import {collection, doc, getDoc,deleteDoc,getDocs,setDoc, getFirestore} from "firebase/firestore";


export async function signUp(firstName, lastName, email, password){
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email, password);
        console.log("user signed up: ", userCredential.user.email)
        console.log("User ID: ", userCredential.user.uid)
        const userRef = doc(db, "users", userCredential.user.uid)
        console.log("Writing to Firestore path: ", userRef.path);

        await setDoc(userRef, {
            firstname:firstName,
            lastname: lastName,
            timestamp: new Date()
        })
    

    }catch(error){
        console.error("Error fetching user data ", error);
    }
}