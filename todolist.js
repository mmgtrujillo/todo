const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

var done = function() {

  if (this.checked == true) {
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1
  }
  else {
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1
  }

  
}

function newTodo() {


  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1

  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var editInput = document.createElement("input");

  checkBox.type = "checkbox";
  checkBox.onchange = done;
  editInput.type = "text";
  editInput.value = "Ingrese una tarea";

  listItem.appendChild(checkBox);
  listItem.appendChild(editInput);

  list.appendChild(listItem);


}






