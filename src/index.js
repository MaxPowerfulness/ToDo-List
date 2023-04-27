import './style.css';
import { compareAsc, format } from 'date-fns';
import {taskFactory} from './task-items.js';
import {projectFactory} from './projects.js';

//Global Varibales
let taskCounter = 0; // Used to make trash/view/edit icon class specific to each task item for task removal
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

// Removes overlay from card view and removes card from DOM
overlay.addEventListener('click', () => {
    overlay.classList.toggle('overlay')
    document.body.removeChild(document.querySelector('.view-container'));
})


// Creates a default task to give users an example
function initialize() {
    const newItem = taskFactory('Test Task', 'Test Description', '11-11-11', '11:00 AM', 'High');
    const trashIcon = document.querySelector(`.trash-${taskCounter}`);
    const viewIcon = document.querySelector(`.view-${taskCounter}`);
    const editIcon = document.querySelector(`.edit-${taskCounter}`);
    viewIcon.addEventListener('click', () => {
        newItem.viewTask('Test Task', 'Test Description', '11-11-11asdasdasd', '11:00 AM', 'High');
        overlay.classList.toggle('overlay')
    });
    editIcon.addEventListener('click', (event) => {
        newItem.viewTask('Test Task', 'Test Description', '11-11-11', '11:00 AM', 'High', event);
        overlay.classList.toggle('overlay');
    });

    trashIcon.addEventListener('click', () => newItem.deleteTableRow());
    taskCounter++
}

// Project Event Listeners

// Opens new project form when new task button is selected
newProject.addEventListener('click', () => projectFormContainer.style.display = 'block');

// Closes project form when cancel is clicked
projectCancelBtn.addEventListener('click', () => projectFormContainer.style.display = 'none');

projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    projectFormContainer.style.display = 'none';
    const newProject = projectFactory(document.getElementById('projectName').value);

    const editIcon = document.querySelector(`.project-edit-${projectCounter}`);
    console.log(editIcon);
    const trashIcon = document.querySelector(`.project-edit-${projectCounter}`);
    editIcon.addEventListener('click', () => {
        newProject.editProjectName();
        
    });
    projectCounter++
});


initialize();