import {signUp, logout, login} from "./auth"
import {auth} from "./config";



const signUpForm = document.querySelector("#signupForm")
signUpForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const firstname = document.getElementById("firstName").value
    const lastname = document.getElementById("lastName").value
    const email = document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value

    signUp(firstname, lastname, email, password)
    console.log("Current user:", auth.currentUser);

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

} )

