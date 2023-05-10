import {taskFactory} from './task-items.js';
import {displayAllTasks} from './index.js';

//Global variables
const taskFilters = document.querySelectorAll('.nav-filters li');
const newTask = document.querySelector('.new-task');

const projectFactory = (name) => {
    // Saving project to local storage
    localStorage.setItem(`${name}`, JSON.stringify([]))

// Adding project to table

    const table = document.getElementById('projectTable');
    const projectHeader = document.querySelector('.project-name');
    const newBody = document.createElement('tbody');
    const newRow = document.createElement('tr');
    const projectName = document.createElement('td');

    projectHeader.textContent = name;
    projectName.textContent = name;
    newBody.appendChild(newRow);
    newRow.appendChild(projectName);

    const addProjectOptions = () => {
        let projectOptions = ['./images/edit.svg', './images/icons8-trash-30.png'];
        let iconNames = [`edit`, `trash`];

        for (let i = 0; i < 2; i++) {
            const newCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = projectOptions[i];
            if (iconNames[i] === 'edit') {
                newCell.addEventListener('click', () => editProjectName());
            } else {
                newCell.addEventListener('click', () => {
                    removeProject();
                    if (document.querySelectorAll('tbody').length === 0) { // Defaults to all tasks if no projects are present
                        displayAllTasks();
                        newTask.style.display = 'none';
                    } else { // Selects the next project in the table if current project is deleted
                        document.querySelectorAll('tbody')[0].style.backgroundColor = "#DB7F8E";
                        document.querySelectorAll('tbody')[0].querySelectorAll('td').forEach(cell => cell.style.borderColor = "#ffdbda");
                        projectHeader.textContent = document.querySelectorAll('tbody')[0].querySelector('tr > td').textContent;
                        displayTask(document.querySelectorAll('tbody')[0].textContent);
                    };
                });
            };
            newCell.appendChild(img);
            newRow.appendChild(newCell);
        };
    };
    addProjectOptions();
    selectProject();
    displayTask(name);
    table.insertBefore(newBody, table.firstElementChild);
    

// Methods

    // Clears the task table and loads in project specific tasks
    function displayTask(name) {
        let taskArray = JSON.parse(localStorage.getItem(name));
        document.getElementById('taskTable').innerHTML = '';
        taskArray.forEach(task => taskFactory(task.title, task.description, task.date, task.time, task.priority));
    };

    // Allows the user to change the current name of the project once it has been created
    function editProjectName() {
        // Replaces element with input element and adds a save button used to push the name change
        const editableName = document.createElement('input');
        const saveName = document.createElement('button');
        saveName.textContent = 'Save';
        projectName.replaceWith(editableName);
        editableName.parentNode.insertBefore(saveName, editableName.nextSibling)

        saveName.addEventListener('click', () => {
            projectName.textContent = editableName.value;
            document.querySelector('.project-name').textContent = editableName.value
            editableName.replaceWith(projectName);
            saveName.parentNode.removeChild(saveName);
            changeKeyName(editableName.value);
        });
    };

    // Removes the project from the project table and in local storage
    function removeProject() {
        table.removeChild(newBody);
        localStorage.removeItem(`${name}`); // Removes project from local storage
    };

    // Changes the name of the project in local storage
    function changeKeyName(newName) {
        let projectTasks = JSON.parse(localStorage.getItem(`${name}`));
        localStorage.setItem(`${newName}`, JSON.stringify(projectTasks));
        localStorage.removeItem(`${name}`);
        name = newName;
    };

    // Highlights the project on the project table and changes the project name header
    function selectProject() {
        document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
        newBody.style.cssText = "background-color: #DB7F8E;"
        newTask.style.display = 'block';
        document.querySelectorAll('td').forEach(cell => cell.style.borderColor = "#604D53");
        newBody.querySelectorAll('td').forEach(cell => cell.style.borderColor = "#ffdbda");
        projectHeader.textContent = name;
    }

// Event Listeners

    // Changes background color of row to indicate which project is being selected and displays the project's tasks
    projectName.addEventListener('click', () => {
        taskFilters.forEach(filter => {
            filter.style.backgroundColor = '#C3ACAC';
            filter.style.borderColor = '#604D53';
        });
        selectProject();
        displayTask(name);
    });

    return {editProjectName};
};

export {projectFactory}

