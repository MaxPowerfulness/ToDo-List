import './style.css';
import {taskFactory} from './task-items.js';
import {projectFactory} from './projects.js';
import {sortAllTasksByDate, displayTodayTasks, displayWeekTasks, displayMonthTasks, displayByPriority} from './task-sort.js';

//Global Varibales
const newTask = document.querySelector('.new-task');
const newProject = document.querySelector('.new-project');
const taskFormContainer = document.getElementById('taskItemFormContainer');
const projectFormContainer = document.getElementById('projectFormContainer');
const taskItemForm = document.getElementById('taskItemForm');
const projectForm = document.getElementById('projectForm');
const taskCancelBtn = document.querySelector('.task-cancel');
const projectCancelBtn = document.querySelector('.project-cancel');
const overlay = document.getElementById('backdrop');
const projectHeader = document.querySelector('.project-name');
const all = document.querySelector('.all');
const today = document.querySelector('.today');
const thisWeek = document.querySelector('.week');
const thisMonth = document.querySelector('.month');
const priorityView = document.querySelector('.priority');
const taskFilters = document.querySelectorAll('.nav-filters li');


// Task view Event Listeners
// Filter tasks based on due date or priority

all.addEventListener('click', () => {
    taskFilters.forEach(filter => {
        filter.style.backgroundColor = '#C3ACAC';
        filter.style.borderColor = '#604D53';
    });
    newTask.style.display = 'none';
    document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
    document.querySelectorAll('tbody td').forEach(project => project.style.cssText = "border-color: #604D53;");
    displayAllTasks();
});

today.addEventListener('click', () => {
    taskFilters.forEach(filter => {
        filter.style.backgroundColor = '#C3ACAC';
        filter.style.borderColor = '#604D53';
    });
    newTask.style.display = 'none';
    today.style.backgroundColor = '#DB7F8E'
    today.style.borderColor = '#ffdbda';
    document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
    document.querySelectorAll('tbody td').forEach(project => project.style.cssText = "border-color: #604D53;");
    const allTasks = createMergedTaskList();
    document.getElementById('taskTable').innerHTML = '';
    displayTodayTasks(allTasks).forEach(task => taskFactory(task.title, task.description, task.date, task.time, task.priority));
    projectHeader.textContent = "Today";
});

thisWeek.addEventListener('click', () => {
    taskFilters.forEach(filter => {
        filter.style.backgroundColor = '#C3ACAC';
        filter.style.borderColor = '#604D53';
    });
    newTask.style.display = 'none';
    thisWeek.style.backgroundColor = '#DB7F8E';
    thisWeek.style.borderColor = '#ffdbda';
    document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
    document.querySelectorAll('tbody td').forEach(project => project.style.cssText = "border-color: #604D53;");
    const allTasks = createMergedTaskList();
    document.getElementById('taskTable').innerHTML = '';
    displayWeekTasks(allTasks).forEach(task => taskFactory(task.title, task.description, task.date, task.time, task.priority));
    projectHeader.textContent = "This Week";
});

thisMonth.addEventListener('click', () => {
    taskFilters.forEach(filter => {
        filter.style.backgroundColor = '#C3ACAC';
        filter.style.borderColor = '#604D53';
    });
    newTask.style.display = 'none';
    thisMonth.style.backgroundColor = '#DB7F8E';
    thisMonth.style.borderColor = '#ffdbda';
    document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
    document.querySelectorAll('tbody td').forEach(project => project.style.cssText = "border-color: #604D53;");
    const allTasks = createMergedTaskList();
    document.getElementById('taskTable').innerHTML = '';
    displayMonthTasks(allTasks).forEach(task => taskFactory(task.title, task.description, task.date, task.time, task.priority));
    projectHeader.textContent = "This Month";
});

priorityView.addEventListener('click', () => {
    taskFilters.forEach(filter => {
        filter.style.backgroundColor = '#C3ACAC';
        filter.style.borderColor = '#604D53';
    });
    newTask.style.display = 'none';
    priorityView.style.backgroundColor = '#DB7F8E';
    priorityView.style.borderColor = '#ffdbda';
    document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
    document.querySelectorAll('tbody td').forEach(project => project.style.cssText = "border-color: #604D53;");
    const allTasks = createMergedTaskList();
    sortAllTasksByDate(allTasks);
    document.getElementById('taskTable').innerHTML = '';
    displayByPriority(allTasks).forEach(task => taskFactory(task.title, task.description, task.date, task.time, task.priority));
    projectHeader.textContent = "Priority";
});


// Task table Event Listeners

// Opens new task form when new task button is selected
newTask.addEventListener('click', () => {
    taskFormContainer.style.display = 'block';
    overlay.classList.toggle('overlay');
});

// Closes task form when cancel is clicked
taskCancelBtn.addEventListener('click', () => {
    taskFormContainer.style.display = 'none';
    overlay.classList.toggle('overlay');
});

// Creates a new row (task item) in the task table and adds functionality to task buttons on form submit
taskItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    taskFormContainer.style.display = 'none';
    taskFactory(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('date').value, document.getElementById('time').value, document.getElementById('priority').value);
    document.querySelectorAll('tbody').forEach(project => {
        if (project.style.backgroundColor == "rgb(219, 127, 142)") { // Selects the currently highlighted project (key) and saves the task to it as an object in an array (value)
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
    [document.getElementById('title'), document.getElementById('description'), document.getElementById('date'), document.getElementById('time'), document.getElementById('priority')].forEach(input => input.value = ""); // Clears form on submit
    overlay.classList.toggle('overlay');
});


// Project Event Listeners

// Opens new project form when new task button is selected
newProject.addEventListener('click', () => {
    overlay.classList.toggle('overlay');
    projectFormContainer.style.display = 'block';
});

// Closes project form when cancel is clicked
projectCancelBtn.addEventListener('click', () => {
    projectFormContainer.style.display = 'none';
    overlay.classList.toggle('overlay');
});

projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    projectFormContainer.style.display = 'none';
    projectFactory(document.getElementById('projectName').value);
    document.getElementById('projectName').value = "";
    overlay.classList.toggle('overlay');
});

// Removes overlay from card view and removes card from DOM
overlay.addEventListener('click', () => {
    overlay.classList.toggle('overlay');
    taskFormContainer.style.display = 'none';
    projectFormContainer.style.display = 'none';
    document.body.removeChild(document.querySelector('.view-container'));
})


// Functions

// Creates a default task to give users an example
function initialize() {
    taskFactory('Test Task', 'Test Description', '11-11-11', '11:00 AM', 'High');
    const projectsFromLocal = Object.keys(localStorage);
    projectsFromLocal.forEach(project => projectFactory(project, 'init')); // Grabs all projects saved in local storage and loads them in the project sidebar
};

// Displays all the tasks saved in the local storage and displays them on the dashboard
function displayAllTasks() {
    const allTasks = createMergedTaskList()
    sortAllTasksByDate(allTasks);
    document.getElementById('taskTable').innerHTML = '';
    all.style.backgroundColor = '#DB7F8E';
    all.style.borderColor = '#ffdbda';
    allTasks.forEach(task => taskFactory(task.title, task.description, task.date, task.time, task.priority));
    projectHeader.textContent = "All";
};

// Creates a list of all tasks saved in the local storage and returns it
function createMergedTaskList() {
    const tasksFromLocal = Object.values(localStorage);
    let tasks = [];
    for (let i = 0; i < tasksFromLocal.length; i++) {
        tasks = tasks.concat(JSON.parse(tasksFromLocal[i]));
    };
    const mergedTasks = tasks.flat(1);

    return mergedTasks;
}

initialize();

export {displayAllTasks}