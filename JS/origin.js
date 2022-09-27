const addItem = document.querySelector('#addItem'); //<from>
const todoInput = document.querySelector('#todoInput'); //<input>
const todoList = document.querySelector('#todoList'); //<ul>
const toggleBut = document.querySelector('#toggle');
let originalLists = todoList.querySelectorAll('li');

function addTodo(evt) {
	evt.preventDefault();
	const inputText = todoInput.value;
	const li = document.createElement('li');
	li.classList.add('list-box-li');
	li.innerHTML = `<label><input type="checkbox" class="list-box-check"><span>${inputText}</span></label>
    <a href="javascript:;"><i class="icon-basic-trashcan"></i></a>`;
	todoList.append(li);
	todoInput.value = '';
	originalLists = todoList.querySelectorAll('li');
}

function finishClass(el) {
	el.classList.toggle('finish');
}

function eventTarget(evt) {
	if (evt.target && evt.target.nodeName === 'INPUT') {
		let tag = evt.target.nextElementSibling;
		finishClass(tag);
	} else if (evt.target && evt.target.nodeName === 'I') {
		evt.target.parentElement.parentElement.remove();
	}
}

function orderChange(evt) {
	if (evt.target && evt.target.id === 'toggle') {
		if (toggleBut.checked) {
			let allLists = todoList.querySelectorAll('li');
			for (let list of allLists) {
				let span = list.children[0].children[1];
				if (span.classList.contains('finish')) {
					todoList.appendChild(list);
				}
			}
		} else {
			for (let i = 0; i < originalLists.length; i++) {
				todoList.appendChild(originalLists[i]);
			}
		}
	}

	if (evt.target && evt.target.nodeName === 'INPUT') {
		if (toggleBut.checked) {
			let allLists = todoList.querySelectorAll('li');
			for (let list of allLists) {
				let span = list.children[0].children[1];
				if (span.classList.contains('finish')) {
					todoList.appendChild(list);
				}
			}
		}
	}
}

addItem.addEventListener('submit', addTodo);

todoList.addEventListener('click', eventTarget);

todoList.addEventListener('click', orderChange);

toggleBut.addEventListener('click', orderChange);
