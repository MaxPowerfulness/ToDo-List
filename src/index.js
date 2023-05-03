import './style.css';
import { compareAsc, format } from 'date-fns';
import {taskFactory} from './task-items.js';
import {projectFactory} from './projects.js';

//Global Varibales
let projectCounter = 0;
const newTask = document.querySelector('.new-task');
const newProject = document.querySelector('.new-project');
const taskFormContainer = document.getElementById('taskItemFormContainer');
const projectFormContainer = document.getElementById('projectFormContainer');
const taskItemForm = document.getElementById('taskItemForm');
const projectForm = document.getElementById('projectForm');
const taskCancelBtn = document.querySelector('.task-cancel');
const projectCancelBtn = document.querySelector('.project-cancel');
const overlay = document.getElementById('backdrop');

// Task Event Listeners

// Opens new task form when new task button is selected
newTask.addEventListener('click', () => taskFormContainer.style.display = 'block');

// Closes task form when cancel is clicked
taskCancelBtn.addEventListener('click', () => taskFormContainer.style.display = 'none');

// Creates a new row (task item) in the task table and adds functionality to task buttons on form submit
taskItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    taskFormContainer.style.display = 'none';
    const newItem = taskFactory(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('date').value, document.getElementById('time').value, document.getElementById('priority').value);
    document.querySelectorAll('tbody').forEach(project => {
        if (project.style.backgroundColor == "rgba(255, 255, 255, 0.5)") {
            let storedProject = JSON.parse(localStorage.getItem(`${project.firstElementChild.firstElementChild.textContent}`));
            let task = {
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                priority: document.getElementById('priority').value
            };
            storedProject.push(task);
            localStorage.setItem(`${project.firstElementChild.firstElementChild.textContent}`, JSON.stringify(storedProject));
        };
    });
});

// Removes overlay from card view and removes card from DOM
overlay.addEventListener('click', () => {
    overlay.classList.toggle('overlay')
    document.body.removeChild(document.querySelector('.view-container'));
})


// Creates a default task to give users an example
function initialize() {
    const newItem = taskFactory('Test Task', 'Test Description', '11-11-11', '11:00 AM', 'High');
}

// Project Event Listeners

// Opens new project form when new task button is selected
newProject.addEventListener('click', () => projectFormContainer.style.display = 'block');

// Closes project form when cancel is clicked
projectCancelBtn.addEventListener('click', () => projectFormContainer.style.display = 'none');

projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    projectFormContainer.style.display = 'none';
    projectFactory(document.getElementById('projectName').value);
});

initialize();