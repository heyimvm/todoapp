const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');
function addTask(){
    if(inputbox.value === ''){
        alert("Must enter something!");
    }
    else{
        let li= document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);  
    }
    inputbox.value = "";
    saveData();
}

listcontainer.addEventListener('click', function(event){
    if(event.target.tagName === "LI" ){
        event.target.classList.toggle('checked');
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        const inputbox = document.getElementById('input-box');
        saveData();
    }
} , false);


function saveData(){
    localStorage.setItem("data" , listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();