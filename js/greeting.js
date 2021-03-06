 const loginForm = document.querySelector("#login-form");
 const loginInput = loginForm.querySelector("input");
 const greeting = document.querySelector("#greeting");

 const HIDDEN_CLASSNAME = "hidden";
 const USERNAME_KEY = "username";

 function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
 }

 function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
 }

 const savedusername = localStorage.getItem(USERNAME_KEY);

 if (savedusername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
 } else {
     paintGreeting(savedusername);
 }