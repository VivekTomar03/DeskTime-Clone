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

let button = document.querySelector("#searchbtn")
button.addEventListener("click", function(){
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