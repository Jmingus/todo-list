'use strict';

var textBoxButton = document.getElementById('text-box-button');
var textBox = document.getElementById('text-box');
var textBoxSection = document.getElementById('text-box-section');
var textBoxDeleteList = document.getElementById('text-box-delete-list-button');
var todoList = [];

function textBoxClick() {
    console.log(textBox.value)
    todoList.push(textBox.value)
    render();
    localStorage['todoList'] = JSON.stringify(todoList)
}

function render(){
    textBoxSection.innerHTML = ''
    for(var i = 0;i < todoList.length; i++){
        var todoListContainer = document.createElement('div')
        todoListContainer.setAttribute('id', 'todoDiv'+ [i])
        textBoxSection.appendChild(todoListContainer)

        var todoListItem = document.createElement('p')
        todoListContainer.appendChild(todoListItem)

        var todoListDelete = document.createElement('button')
        todoListContainer.appendChild(todoListDelete)
        todoListDelete.innerHTML = "Delete Item"

        var todoElement = document.getElementById('todoDiv'+[i])
        todoElement.addEventListener('click', function(){
            this.remove();
        })
        todoListItem.innerHTML = todoList[i]
    }
}

function reloadStorage(){
   var storage = JSON.parse(localStorage.todoList)
    for(var j = 0; j < storage.length; j++){
        todoList.push(storage[j])
    }
    render()
}

function deleteList(){
    todoList = []
    localStorage.todoList = {}
    render()
}

console.log(localStorage.todoList);

textBoxButton.addEventListener('click', textBoxClick);
textBoxDeleteList.addEventListener('click', deleteList );
if(localStorage.todoList.length !== 0 ){
    window.onload = reloadStorage
}
