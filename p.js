let input = document.getElementById("inputText");
let list= document.getElementById("list");
let minimalValue = 3;
let listNum = 0;
addList=()=>{
// get
let inputText = filterList(input.value);
// set 
if (inputText) {
list.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="list${listNum}">
        <div class="row">
        
        <div class="col-6">
            <span class=" h4" id="text${listNum}"> ${inputText} </span>
        </div>
        <div class="col-4">
             <button class=" btn btn-danger" onclick="deleteList(${listNum})">Delete</button>
             <button class=" btn btn-primary" onclick="editList(${listNum})">Update</button>
        </div>                  
         </div>    
        </li> `;
input.value=" ";
listNum++;

}
}

done=(listId)=>{ 
let checkbox = document.getElementById(`check${listId}`);
let current = document.getElementById(`text${listId}`);
let classExit=current.classList.contains("text-decoration-line-through");
if (classExit == true) {
current.classList.remove("text-decoration-line-through");
}else{
current.classList.add("text-decoration-line-through");
}

}
// filter the list
filterList=(x)=>{
if (x) {
    if (x.length >= minimalValue) {
        return x;
    }
    else{
        alert("Please enter more than 3 words")
    }
}
else{
    return false;
}
}
// edit list
editList=(listId)=>{
let currentText = document.getElementById(`text${listId}`);
let newText = prompt("Type a new task",currentText.innerHTML);
if (filterList(newText)) {
currentText.innerHTML = newText; 
}
}
// delete list
deleteList=(listId)=>{
let current = document.getElementById(`text${listId}`).innerHTML;
let deleteComfirm = confirm(`Are you sure you want to delete the task:${current}?`);
if (deleteComfirm) {
 let p = document.getElementById("list")
let c = document.getElementById(`list${listId}`);
p.removeChild(c);
}
else{
console.log("deleted");
}
};