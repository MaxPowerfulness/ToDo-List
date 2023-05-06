import {taskFactory} from './task-items.js';

//Global variables
let counter = 0;

const projectFactory = (name) => {
    // Saving project to local storage
    localStorage.setItem(`${name}`, JSON.stringify([]))

// Adding project to table

    const table = document.getElementById('projectTable');
    const projectHeader = document.querySelector('.project-name');
    const newBody = document.createElement('tbody');
    newBody.classList.add(`${name}`);
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
                img.addEventListener('click', () => editProjectName());
            } else {
                img.addEventListener('click', () => removeProject());
            };
            newCell.appendChild(img);
            newRow.appendChild(newCell);
        };
        counter++
    };
    addProjectOptions();
    selectProject();
    displayTask();
    table.insertBefore(newBody, table.firstElementChild);
    

// Methods

    // Clears the task table and loads in project specific tasks
    function displayTask() {
        let taskArray = JSON.parse(localStorage.getItem(`${name}`));
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
        document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: transparent;")
        newBody.style.cssText = "background-color: rgb(255, 255, 255, 0.5);"
        projectHeader.textContent = name;
    }

// Event Listeners

    // Changes background color of row to indicate which project is being selected and displays the project's tasks
    newBody.addEventListener('click', () => {
        selectProject();
        displayTask();
    });

    return {editProjectName};
};

export {projectFactory}

