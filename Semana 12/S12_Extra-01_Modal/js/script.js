function addText(){
    var todo = document.getElementById('todo').value;
    var todo = document.createTextNode(todo);
    var item = document.createElement("div");
    item.appendChild(todo);
    document.getElementById('todo-list').appendChild(item);
  
}