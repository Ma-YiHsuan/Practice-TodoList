let todoArr = ['買鮮奶', '讀一本書', '遛狗'];

const addItem = document.querySelector('#addItem'); //<from>
const todoInput = document.querySelector('#todoInput'); //<input>
const todoList = document.querySelector('#todoList'); //<ul>
const toggleBut = document.querySelector('#toggle');

//初始渲染
(function () {
	for (let vlue of todoArr) {
		const li = document.createElement('li');
		li.classList.add('list-box-li');
		li.innerHTML = `<label><input type="checkbox" class="list-box-check"><span>${vlue}</span></label>
    <a href="javascript:;"><i class="icon-basic-trashcan"></i></a>`;
		todoList.append(li);
	}
})();

let originalLists = todoList.querySelectorAll('li');

function addTodo(evt) {
	evt.preventDefault();
	const inputText = todoInput.value;
	const li = document.createElement('li');
	li.classList.add('list-box-li');
	li.innerHTML = `<label><input type="checkbox" class="list-box-check"><span>${inputText}</span></label>
    <a href="javascript:;"><i class="icon-basic-trashcan"></i></a>`;
	todoList.append(li);
	originalLists = todoList.querySelectorAll('li');
	todoInput.value = '';
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
	if (!toggleBut.checked) {
		evt.stopImmediatePropagation();
	}
}

function arrayOrder(el = null) {
	const fragment = document.createDocumentFragment();
	const allLi = todoList.querySelectorAll('li');
	const arryLi = Array.from(allLi);
	if (toggleBut.checked) {
		let isFinish = [];
		let noFinish = [];
		for (let li of arryLi) {
			if (li.children[0].children[1].classList.contains('finish')) {
				isFinish.push(li);
			} else {
				noFinish.push(li);
			}
		}
		if (el && el.classList.contains('finish')) {
			isFinish.push(el.parentElement.parentElement);
		}
		let newAllLi = [...noFinish, ...isFinish];
		for (let item of newAllLi) {
			fragment.appendChild(item);
		}
		todoList.appendChild(fragment);
	} else {
		for (let li of originalLists) {
			fragment.appendChild(li);
		}
		todoList.appendChild(fragment);
	}
}

function orderChange(evt) {
	if (evt.target && evt.target.id === 'toggle') {
		arrayOrder();
	}

	if (evt.target && evt.target.nodeName === 'INPUT') {
		arrayOrder(evt.target.nextElementSibling);
	}
}

addItem.addEventListener('submit', addTodo);

toggleBut.addEventListener('click', orderChange);

todoList.addEventListener('click', eventTarget);

todoList.addEventListener('click', orderChange);
