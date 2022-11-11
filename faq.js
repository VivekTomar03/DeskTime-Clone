let faq = document.querySelector(".faq")

faq.addEventListener("click" , function(event){
    event.preventDefault()
    console.log("click")
    let head1 = document.querySelector("#head1").innerText
localStorage.setItem("head1" ,head1)


let head2 = document.querySelector("#head2").innerText
localStorage.setItem("head2" ,head2)
})

let head1_data = localStorage.getItem("head1")
let head2_data = localStorage.getItem("head2")


let search = document.querySelector("#search").input

let button2 = document.querySelector("#searchbtn")
button2.addEventListener("click", function(){
    searchitem()
    
})

function searchitem(){
    if(search==="Getting started"){
         alert("item search")
         console.log("yes")
    }
    else {
        alert("no data found")
    }
}


let button1 = document.querySelector("#gmailbtn")
button1.addEventListener("click" , function(){
  let email1 = document.querySelector("#gmail").value;
  localStorage.setItem("email" , JSON.stringify(email1) )
})