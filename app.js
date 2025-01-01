let input = document.querySelector('.todoInput'); 
let btn = document.querySelector('.todoBtn');
let ul = document.querySelector('.todoList');

function addTodo() {
  let task = input.value;
    if (input.value == ''){
      alert('Please enter a Task')
    } else {
      let span = document.createElement('span');
      let li = document.createElement('li');
      li.innerHTML = task;
      ul.appendChild(li);
      span.innerHTML = 'X';
      li.appendChild(span);
    }
  input.value = '';
  saveTodo();
}

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI'){
    e.target.classList.toggle('completed');
    saveTodo();
  }
  if (e.target.tagName === 'SPAN'){
    e.target.parentElement.style.display = 'none';
    saveTodo();
  }
});

const saveTodo = () => {
  localStorage.setItem('todoList', ul.innerHTML);
}
const getTodo = () => {
  ul.innerHTML = localStorage.getItem('todoList');
}
window.onload = getTodo;