const btn = document.querySelector('.todoBtn');
const form = document.querySelector('.todoWrapper'); // Select the form
const input = document.querySelector('.todoInput');
const ul = document.querySelector('.todoList');




// Event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  addTodo();
});

//function to add a todo item
function addTodo() {
  const task = input.value.trim();
  if (task === '') {
    return; 
  }

  // Create a new list item with the task
  const li = document.createElement('li');
  li.innerHTML = task;

  // Create a span element for the delete button
  const span = document.createElement('span');
  span.innerHTML = 'x';
  li.appendChild(span); // Add the span to the list item
  ul.appendChild(li); // Add the list item to the unordered list

  input.value = ''; // Clear the input field after adding the task
  input.focus(); // Set focus back to the input field

  saveTodo(); // Save the updated todo list
}

// Event listener for click events on the todo list
ul.addEventListener('click', (e) => {
  // Toggle the completed class on list items when clicked
  if (e.target.tagName === 'LI'){
    e.target.classList.toggle('completed');
    saveTodo();
  }
  // Remove the list item when the delete button (span) is clicked
  if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveTodo();
  }
});

// Functions to save and retrieve the todo list from localStorage
const saveTodo = () => {
  localStorage.setItem('todoList', ul.innerHTML);
}
// Function to retrieve the todo list from localStorage when the page loads
const getTodo = () => {
  ul.innerHTML = localStorage.getItem('todoList');
}
window.onload = getTodo;