import {signUp, logout, login} from "./auth"
import {auth} from "./config";



const signUpForm = document.querySelector("#signupForm")
signUpForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const firstname = document.getElementById("firstName").value.trim
    const lastname = document.getElementById("lastName").value.trim()
    const email = document.getElementById("signupEmail").value.trim()
    const password = document.getElementById("signupPassword").value.trim()

    signUp(firstname, lastname, email, password)
    console.log("Current user:", auth.currentUser);
    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value= ""
    document.getElementById("signupEmail").value =""
    document.getElementById("signupPassword").value = ""

} )

const logoutUpForm = document.querySelector("#logoutForm")
logoutUpForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    logout()

} )

const loginForm = document.querySelector("#loginForm")
loginForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value
    login(email, password)

    document.getElementById("loginEmail").value =""
    document.getElementById("loginPassword").value = ""

} )

