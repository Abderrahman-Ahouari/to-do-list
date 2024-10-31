let task = document.getElementById("task");
let form = document.getElementById("form");
let close_btn = document.getElementById("btn_close");

task.addEventListener("click",()=>{
    form.classList.remove("hidden");
})




close_btn.addEventListener("click",()=>{
    form.classList.add("hidden");
})



let tite = document.getElementById("titre");
let description = document.getElementById("description");
let datestart = document.getElementById("datestart");
let dateend = document.getElementById("dateend");
let category = document.getElementById("category")
let statu = document.getElementById("statu"); 
let addtask = document.getElementById("addtask"); 



let tasks
if(localStorage.tasksStock != null){
    tasks = JSON.parse(localStorage.tasksStock)
}else{
     tasks = [];
}

addtask.onclick = function () {   
    form.classList.add("hidden");
     let newtask = {
        id:Math.random()*100,
            title : tite.value,
            description : description.value, 
            datestart : datestart.value, 
            dateend : dateend.value, 
            category : category.value, 
            statu : statu.value, 
 
     }
     tasks.push(newtask);
     localStorage.setItem('tasksStock', JSON.stringify(tasks))   
     clearinputs()
}


function clearinputs(){
      tite.value = ''
      description.value = ''
      dateend.value = ''
      datestart.value = ''
      category.value = 'P1'
      statu.value = 'To do'
      console.log(",,,n,")
}






 