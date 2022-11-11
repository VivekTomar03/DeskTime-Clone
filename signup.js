let form = document.querySelector("form")


let data = JSON.parse(localStorage.getItem("signup_data")) || []
form.addEventListener("submit" , function(eve){
  eve.preventDefault()
    let obj = {
        name : form.name1.value,
        email: form.email.value,
        password:form.password.value,
    }
      
    if(obj.email==="" ){
        alert("Please fill all the information")
    }

   else if(obj.name==="" ){
        alert("Please fill all the information")
    }
    
   
   else if(obj.password==="" ){
        alert("Please fill all the information")
    }
   else {
    data.push(obj)
   localStorage.setItem("signup_data" , JSON.stringify(data))
   alert("Sign up Successful!!!")
   window.location.href="./sign_in.html";
  
   }
   
})
 let email_data =JSON.parse(localStorage.getItem("email"))

document.querySelector("#email").value = email_data