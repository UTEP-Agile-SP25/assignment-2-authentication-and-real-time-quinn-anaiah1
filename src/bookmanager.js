import { doc, setDoc, collection, deleteDoc, onSnapshot } from "@firebase/firestore";
import{signUp, logout, login, onAuthStateChanged} from "./auth";
import {db, auth} from "./config";

const saveBook = async function name() { // save new book to database
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
        console.error("Error saving book", error)
    }
}

const deleteBook = async function(collection, docID){ // delete book by id from database
    try {
        await deleteDoc(doc(db, collection, docID))
        console.log(`Document with ID ${docID} deleted successfully`)
    } catch (error) {
        console.error("Error deleting book", error)
        
    }
}

const bookCollection = collection(db,"books") // table configuration that updates with changes to data
onSnapshot(bookCollection, (snapshot)=>{
    const tableBody = document.getElementById("table-body")
    tableBody.innerHTML=""

    snapshot.forEach((doc)=>{
        const data = doc.data()
        const row = document.createElement("tr")

        row.innerHTML= `
        <td> ${doc.id}</td>
        <td> ${data.name}</td>
        <td> ${data.author}</td>
        <td> ${data.genre}</td>
        
        `
        tableBody.appendChild(row)
    })
})

const addBook = document.querySelector("#addBook")
addBook.addEventListener("submit", (event)=>{
    event.preventDefault()
    saveBook()
})

const deleteABook = document.querySelector("#deleteBook")
deleteABook.addEventListener("submit", (event)=>{
    event.preventDefault()
    const book = document.getElementById("bookID").value.trim()
    deleteBook("books", book)
    document.getElementById("bookID").value = ""
})

const logoutUpForm = document.querySelector("#logoutForm")
logoutUpForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    logout()

} )