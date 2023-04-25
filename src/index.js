import './style.css';
import { compareAsc, format } from 'date-fns';
import {taskFactory} from './task-items.js'

//Global Varibales
let counter = 0; // Used to make trash/view/edit icon class specific to each task item for task removal
const newTask = document.querySelector('.new-task');
const newProject = document.querySelector('.new-project');
const taskFormContainer = document.getElementById('taskItemFormContainer');
const taskItemForm = document.getElementById('taskItemForm');
const cancelBtn = document.querySelector('.cancel');
const overlay = document.getElementById('backdrop');

// Event Listeners

// Opens new task form when new task button is selected
newTask.addEventListener('click', () => {
    taskFormContainer.style.display = 'block';
})

// Closes form when cancel is clicked
cancelBtn.addEventListener('click', () => taskFormContainer.style.display = 'none');

// Creates a new row (task item) in the task table and adds functionality to task buttons on form submit
taskItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    taskFormContainer.style.display = 'none';
    const newItem = taskFactory(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('date').value, document.getElementById('time').value, document.getElementById('priority').value);
    const trashIcon = document.querySelector(`.trash-${counter}`);
    const viewIcon = document.querySelector(`.view-${counter}`);
    const editIcon = document.querySelector(`.edit-${counter}`);
    trashIcon.addEventListener('click', () => newItem.deleteTableRow());
    viewIcon.addEventListener('click', () => {
        newItem.viewTask(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('date').value, document.getElementById('time').value, document.getElementById('priority').value);
        overlay.classList.toggle('overlay')
    });
    editIcon.addEventListener('click', (event) => {
        newItem.viewTask(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('date').value, document.getElementById('time').value, document.getElementById('priority').value, event);
        overlay.classList.toggle('overlay');
    });
    counter++;
})

overlay.addEventListener('click', () => {
    overlay.classList.toggle('overlay')
    document.body.removeChild(document.querySelector('.view-container'));
})


// Creates a default task to give users an example
function initialize() {
    const newItem = taskFactory('Test Task', 'Test Description', '11-11-11', '11:00 AM', 'High');
    const trashIcon = document.querySelector(`.trash-${counter}`);
    const viewIcon = document.querySelector(`.view-${counter}`);
    const editIcon = document.querySelector(`.edit-${counter}`);
    viewIcon.addEventListener('click', () => {
        newItem.viewTask('Test Task', 'Test Description', '11-11-11', '11:00 AM', 'High');
        overlay.classList.toggle('overlay')
    });
    console.log(editIcon);
    editIcon.addEventListener('click', (event) => {
        newItem.viewTask('Test Task', 'Test Description', '11-11-11', '11:00 AM', 'High', event);
        overlay.classList.toggle('overlay');
    });

    trashIcon.addEventListener('click', () => newItem.deleteTableRow());
    counter++
}

initialize();