function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("universal").style.marginLeft="250px"
    // document.getElementById("mySidenav").style.width = "0px";
   
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("universal").style.marginLeft="0px"
    
  }

  function popup(){
   let notification = document.querySelector("#pop")
   notification.style.display = "block"
   myFunction()
  }
  
  document.querySelector("#bell").addEventListener("click" , function(event) {
    event.preventDefault()
    popup()
   })
   
   
   
   document.querySelector("#close").addEventListener("click" , function(){
    let notification = document.querySelector("#pop")
   notification.style.display = "none"
   })
   
   
   function myFunction() {
    timeout = setTimeout(function(){
        let notification = document.querySelector("#pop")
      
   notification.style.display = "none";
  
   
    }, 3000);
  }


  function pophelp(){
    let helppop =document.querySelector("#help_pop")
    helppop.style.display="block"
    
  }

  let helpbtn = document.querySelector("#help").addEventListener("click" , function(event){
    event.preventDefault()
    pophelp()
  })
  document.querySelector("#close1").addEventListener("click" , function(){
    let helppop =document.querySelector("#help_pop")
    helppop.style.display="none"
   })


   function myFunction1() {
    timeout1 = setTimeout(function(){
      let helppop =document.querySelector("#help_pop")
    helppop.style.display="none"
   
    }, 3000);
  }
  function displayaccinfo(){
    let acc_info = document.querySelector("#acc_info")
    acc_info.style.display= "block"
    acc_info.style.display ="flex"
    
  }

  document.querySelector("#acc").addEventListener("click" , function(){
    displayaccinfo()
    
  })
  
  let acc_data = JSON.parse(localStorage.getItem("login"));
  document.querySelector("#acc").innerText = acc_data