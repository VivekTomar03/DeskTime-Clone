let button = document.querySelector("#trail")
button.addEventListener("click" , function(){
  let email = document.querySelector("#email").value;
  localStorage.setItem("email" , JSON.stringify(email) )
})
let button1 = document.querySelector("#gmailbtn")
button1.addEventListener("click" , function(){
  let email1 = document.querySelector("#gmail").value;
  localStorage.setItem("email" , JSON.stringify(email1) )
})
