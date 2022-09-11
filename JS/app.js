const addItem = document.querySelector('#addItem');   //<from>
const todoInput = document.querySelector('#todoInput'); //<input>
const allLists = document.querySelector('#todoList'); //<ul> 

function addTodo(evt){
    evt.preventDefault();
    const inputText = todoInput.value;
    const li = document.createElement('li');
    li.innerHTML=`<label><input type="checkbox"><span>${inputText}</span></label><a href="javascript:;">刪除</a>`;
    allLists.append(li);
    todoInput.value="";
}

function finishClass(el){
    el.classList.toggle('finish')
}

addItem.addEventListener('submit', addTodo);

allLists.addEventListener('change', function(evt){
    if(evt.target && evt.target.nodeName === 'INPUT'){
        let tag = evt.target.nextElementSibling;
        finishClass(tag);
    }
})

allLists.addEventListener('click', function(evt){
    if(evt.target && evt.target.nodeName === 'A'){
        evt.target.parentElement.remove();
    }
})
