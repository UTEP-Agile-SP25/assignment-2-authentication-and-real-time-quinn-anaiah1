import { doc } from "@firebase/firestore";
import{signUp, logout, login, onAuthStateChanged} from "./auth";
import {db} from "./config";

const saveBook = async function name() {
    const bookName = document.getElementById("bookName").value.trim()
    const author = document.getElementById("author").value.trim()
    const genre = document.getElementById("genre").value.trim()

    try {
        const bookRef = doc(db, "books", bookName.toLowerCase() +"-" + author.toLowerCase())

        await setDoc(bookRef, {
            name: bookName, 
            author: author,
            genre: genre,
            time: new Date()
        })
        console.log("Book successfully created")
        document.getElementById("bookName").value = ""
        document.getElementById("author").value = ""
        document.getElementById("genre").value = ""

        
    } catch (error) {
        console.error("Error saving city", error)
    }
}