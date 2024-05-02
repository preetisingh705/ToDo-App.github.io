let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("#list");
let countvalue = document.querySelector(".count-value");
let taskcount = 0; 

const displaycount = (taskcount) => {
    countvalue.innerText = taskcount;
};

btn.addEventListener("click", function () {
    if (input.value !== "") {
        taskcount += 1;
        let item = document.createElement("li");
        item.innerText = input.value;
        ul.appendChild(item);
        let dlbtn = document.createElement("button");
        dlbtn.innerText = 'Delete';
        dlbtn.classList.add("delete");
        item.appendChild(dlbtn);
        input.value = "";
        savedata();
        displaycount(taskcount);
    } else {
        alert("You must write something!");
    }
});
ul.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        if (event.target.classList.contains("checked")) {
            if (taskcount>0){
                taskcount -= 1;
            } 
        } else {
            taskcount += 1; 
        }
        displaycount(taskcount);
        savedata();
    } else if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        if (listItem.classList.contains("checked")) {
            listItem.remove();
        }
        else if(taskcount>0){
                        listItem.remove();
                        taskcount -=1;
        }
        displaycount(taskcount);
        savedata();
    }
}, false);


function savedata() {
    localStorage.setItem("data", ul.innerHTML);
}

function show() {
    ul.innerHTML = localStorage.getItem("data");
}

show();

