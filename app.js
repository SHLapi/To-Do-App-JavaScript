const btn = document.querySelector('.todoBtn');
const form = document.querySelector('.todoWrapper'); // Select the form
const input = document.querySelector('.todoInput');
const ul = document.querySelector('.todoList');




// Event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  addTodo();
});

function addTodo() {
  const task = input.value.trim();
  if (task === '') {
    return; 
  }

  const li = document.createElement('li');
  li.innerHTML = task;

  const span = document.createElement('span');
  span.innerHTML = 'x';
  li.appendChild(span);
  ul.appendChild(li);

  input.value = '';
  saveTodo();
}

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI'){
    e.target.classList.toggle('completed');
    saveTodo();
  }
  if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
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