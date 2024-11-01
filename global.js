let task = document.getElementById("task");
let form = document.getElementById("form");
let close_btn = document.getElementById("btn_close");

task.addEventListener("click", () => {
  form.classList.remove("hidden");
});

close_btn.addEventListener("click", () => {
  form.classList.add("hidden");  
});

let tite = document.getElementById("titre");
let description = document.getElementById("description");
let datestart = document.getElementById("datestart");
let dateend = document.getElementById("dateend");
let category = document.getElementById("category");
let statu = document.getElementById("statu");
let addtask = document.getElementById("addtask");

let tasks;
if (localStorage.tasksStock != null) {
 tasks = JSON.parse(localStorage.tasksStock);
} else {
  tasks = [];
}





addtask.onclick = function () {

  
  form.classList.add("hidden");
  let newtask = {
    id: Math.random() * 100,
    title: tite.value,
    description: description.value,
    datestart: datestart.value, 
    dateend: dateend.value,
    category: category.value,
    statu: statu.value,
  };
  tasks.push(newtask);
  localStorage.setItem("tasksStock", JSON.stringify(tasks));
  clearinputs();
  
  location.reload();
};

function clearinputs() {
  tite.value = "";
  description.value = "";
  dateend.value = "";
  datestart.value = "";
  category.value = "P1";
  statu.value = "To do";
}

// console.log(task_counter)
function showdata() {
    
 

  tasks.forEach(task_ => {
    const todo = document.querySelector('#todo');
    const doing = document.querySelector('#doing');
    const done = document.querySelector('#done'); 
    let taskdiv = document.createElement('div');
    let p_color;
    switch(task_.category){
      case "P1":
        p_color = "red";
        break;
      case "P2":
        p_color = "yellow";
        break;
      case "P3":
        p_color = "green";
        break;
    }

    taskdiv.innerHTML = ` 
      <div  id="taskcard" style="border-left: 8px solid ${p_color};"
          class="bg-white shadow-md rounded p-4 mb-4 my-10 "    >
          <h3 class="font-bold">${task_.title}</h3>
          <p>${task_.description}</p>
          <div class="flex justify-around mt-2">
            <button class="bg-blue-500 text-white py-1 px-3 rounded">
              Edit
            </button>
            <button class="bg-red-500 text-white py-1 px-3 rounded" onclick=remove(this)>
              Delete
            </button>
          </div> 
        </div>
    ` 
    if(task_.statu=== 'To do'){
      todo.appendChild(taskdiv);
    } else if (task_.statu === 'doing'){
      doing.appendChild(taskdiv);
    } else if("done"){
      done.appendChild(taskdiv);
    }  
       
    
  }); 
}
window.addEventListener("load", () => {
  showdata();
});

function remove(r) {
  r.parentElement.parentElement.remove()
}

