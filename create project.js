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


  let button = document.querySelector("#createnow")
  button.addEventListener("click" , function(event){
    event.preventDefault()
    let newprojectwin = document.querySelector("#createprojectpop")
    newprojectwin.style.display="block"
  })

  
    let array =JSON.parse(localStorage.getItem("project")) || []
  let form = document.querySelector("form")
  let num = 1
  form.addEventListener("submit" , function(){
    let obj = {
        name : form.projectname.value,
        hours_rate : form.projecthrs.value,
        total_cost : form.cost.value,
        total_hours  : form.hours.value,
        project_num : num++
    }
     array.push(obj)
     localStorage.setItem("project" ,JSON.stringify(array))
  })

  let projectdata = JSON.parse(localStorage.getItem("project"))
 
  function displayproject(data){
    data.forEach(function(ele){
        let div = document.createElement("div")

        let name = document.createElement("h1")
        name.innerText = ele.name;
         
        let showbrn = document.createElement("button")
        showbrn.innerText = "Show Project"
        showbrn.addEventListener("click" , function(){
            window.location="./projectlist.html"
        })
        div.append(name , showbrn)
        document.querySelector("#projectlist").append(div)
    })
  }
  displayproject(projectdata)

  function display(data){
    console.log(data.length)
    
      document.querySelector("#totalproject").innerText = data.length
      document.querySelector("#month").innerText = data.length
      document.querySelector("#week").innerText = data.length
   
  }
  display(projectdata)

  let logo = document.querySelector("#logo")
  logo.addEventListener("click" , function(){
    alert("You must logout first from profile")
  })
