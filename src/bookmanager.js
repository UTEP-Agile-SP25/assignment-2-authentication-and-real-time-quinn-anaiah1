import { doc } from "@firebase/firestore";
import{signUp, logout, login, onAuthStateChanged} from "./auth";
import {db} from "./config";

const saveBook = async function name() {
    const bookName = document.getElementById("bookName").value.trim()
    const author = document.getElementById("author").value.trim()
    const genre = document.getElementById("genre").value.trim()
}