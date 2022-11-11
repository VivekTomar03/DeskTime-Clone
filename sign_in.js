let data = JSON.parse(localStorage.getItem("signup_data"))
console.log(data)

let form = document.querySelector("form")
form.addEventListener("submit" , function(eve){
 eve.preventDefault()
  checkdata(data)
})

function checkdata(data){
    let email = document.querySelector("#email").value
    let pass = document.querySelector("#pass1").value
    let flag = false
    data.forEach(function(ele) {
       let data = (ele.name)
       if(email===ele.email && pass ===ele.password ){
        flag = true
        localStorage.setItem("login" ,JSON.stringify(data))
       }
       
    })
    if(flag===true){
        alert("Sign in Successful ")
        window.location.href="./dashboard.html";
       
       

    }
    else {
        alert("Wrong Credentials!! either signup instead")
    }
}