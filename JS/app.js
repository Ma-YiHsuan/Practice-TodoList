const addItem = document.querySelector('#addItem'); //<from>
const todoInput = document.querySelector('#todoInput'); //<input>
const allLists = document.querySelector('#todoList'); //<ul>
const toggleBut = document.querySelector('#toggle');
const spans = document.querySelectorAll('span');

function addTodo(evt) {
	evt.preventDefault();
	const inputText = todoInput.value;
	const li = document.createElement('li');
	li.classList.add('list-box-li');
	li.innerHTML = `<label><input type="checkbox" class="list-box-check"><span>${inputText}</span></label>
                    <a href="javascript:;"><i class="icon-basic-trashcan"></i></a>`;
	allLists.append(li);
	todoInput.value = '';
}

function finishClass(el) {
	el.classList.toggle('finish');
}

addItem.addEventListener('submit', addTodo);

allLists.addEventListener('change', function (evt) {
	if (evt.target && evt.target.nodeName === 'INPUT') {
		let tag = evt.target.nextElementSibling;
		finishClass(tag);
	}
});

allLists.addEventListener('click', function (evt) {
	if (evt.target && evt.target.nodeName === 'I') {
		evt.target.parentElement.parentElement.remove();
	}
});
