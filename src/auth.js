import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import {auth} from "./config";
import {db} from "./config";
import {collection, doc, getDoc,deleteDoc,getDocs,setDoc, getFirestore} from "firebase/firestore";

onAuthStateChanged(auth, async (user)=> {
    if(user){
        console.log("Logged in User: ", user.email)
        await fetchUserData(user.uid)
        
    }else{
        console.log("No user is signed in")
    }
})

async function fetchUserData(userID) {
    try {
        const userDoc = doc(db,"users", userID)
        const userSnap = await getDoc(userDoc)
        // const userDoc = await getDocs(collection(db, "users"))
        // const userData = userDoc.docs.find(doc => doc.id===userID)?.data()
        if (userSnap.exists()) {
            console.log("User Data: ", userSnap.data());
            const userData = userSnap.data()
            document.getElementById("greeting").innerHTML = "<h2> Hi, " + userData.firstname + "</h2>"
            //return userSnap.data();
        } else {
            console.log("No user document found for:", userID);
        }
    } catch (error) {
        console.error("Error getting user data", error)
    }
}

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
        login(email, password)
        //window.location.href = "bookmanager.html"

    }catch(error){
        console.error("Error fetching user data ", error.message);
    }
}

export async function login(email, password){
    try {
        const userCredential =  await signInWithEmailAndPassword(auth,email, password)
        window.location.href = "bookmanager.html"
    } catch (error) {
        console.error("Log in error", error.message)
        
    }
}
export async function logout(){
    try {
        await signOut(auth)
        console.log("User logged out")
    } catch (error) {
        console.error("Logout error", error.message)
    }
}