let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



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
