const toDoItems = document.getElementsByClassName("to-do-items")[0];
const userInput = document.getElementById("input");

userInput.addEventListener("keydown",function(event){
    if(event.key == "Enter"){
        addItem();
    }
})

function addItem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");
    if(userInput.value.trim() == ''){
        document.style.divParent = "none";
    }
    divParent.className = "item";
    divParent.innerHTML = '<div>'+userInput.value+'</div>';

    checkIcon.className = "fa-solid fa-clipboard-check";
    checkIcon.style.color = "lightgray";

    checkIcon.addEventListener("click",function(){
        checkIcon.style.color = "limegreen";
    })
    divChild.appendChild(checkIcon);

    trashIcon.className = "fa-solid fa-trash-can";
    trashIcon.style.color = "darkgray";

    trashIcon.addEventListener("click",function(){
        divParent.remove();
    })
    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);
    userInput.value = '';
}