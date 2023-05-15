// Globabl varibales
const overlay = document.getElementById('backdrop');
const taskLabels = ['Title:', 'Description:', 'Date:', 'Time:', 'Priority:'];

// Factory function usesd to create and append new tasks to the task table. 
const taskFactory = (title, description, dueDate, dueTime, priority) => {
    const table = document.getElementById('taskTable');
    const newRow = document.createElement('tr');
    const taskInfo = document.createElement('td');
    taskInfo.innerHTML = `${title} <br> ${dueTime} ${dueDate}`;

// Adding task to table

    // Sets border color to indiciate priority level of a task item
    switch (priority) {
        case 'High':
            taskInfo.style.cssText = 'border-left: 3px solid #e62a00;';
            break
        case 'Medium':
            taskInfo.style.cssText = 'border-left: 3px solid #ffaf00;';
            break
        case 'Low':
            taskInfo.style.cssText = 'border-left: 3px solid #00e62a;';
            break
    };

    // Adds icons/features present in all task items
    const addTaskOptions = () => {
        let taskOptions = ['./images/edit.svg', './images/icons8-trash-30.png', './images/icons8-eye-30.png'];
        let iconNames = ['edit', 'trash', 'view'];
        for (let i = 0; i <= 2; i++) { // Adds event listeners for icon function specific to the task
            const newCell = document.createElement('td');
            const img = document.createElement('img');
            img.classList.add('task-icon');
            img.src=taskOptions[i];
            if (iconNames[i] === 'edit') {
                img.addEventListener('click', (event) => {
                    viewTask(title, description, dueDate, dueTime, priority, event);
                    overlay.classList.toggle('overlay');
                });
            } else if (iconNames[i] === 'trash') {
                img.addEventListener('click', () => deleteTableRow());
            } else {
                img.addEventListener('click', () => {
                    viewTask(title, description, dueDate, dueTime, priority);
                    overlay.classList.toggle('overlay');
                });
            };
            newCell.appendChild(img);
            newRow.appendChild(newCell);
        };
    };
    
    // Adds line through task to indicate completion
    taskInfo.addEventListener('click', () => newRow.classList.toggle('strike'));
    
    newRow.appendChild(taskInfo);
    addTaskOptions();
    table.appendChild(newRow);

// Methods

    // Allows user to view the task information in a card format.
    function viewTask(title, description, dueDate, dueTime, priority, event) {
        const viewContainer = document.createElement('div');
        viewContainer.classList.add('view-container');
        const taskName = document.createElement('p');
        const taskDescription = document.createElement('p');
        const taskDueDate = document.createElement('p');
        const taskDueTime = document.createElement('p');
        const taskPriority = document.createElement('p');
        const closeBtn = document.createElement('button'); 

        let taskItems = [taskName, taskDescription, taskDueDate, taskDueTime, taskPriority, closeBtn]; // List for appending task elements into viewContainer
        taskItems.forEach(task => task.classList.add('task-item'));

        taskName.textContent = title;
        taskDescription.textContent = description;
        taskDueDate.textContent = dueDate;
        taskDueTime.textContent = dueTime;
        taskPriority.textContent = priority;
        closeBtn.textContent = 'Close';
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(document.querySelector('.view-container'));
            overlay.classList.toggle('overlay');
        });
        
        const editables = editTask(taskName, taskItems); // List of editable input elements corresponding to each task component

        for (let i = 0; i < taskItems.length; i++) {
            const taskInfoContainer = document.createElement('div');
            taskInfoContainer.classList.add('task-info-container');
            if (taskItems[i] === taskDescription) {
                taskInfoContainer.classList.add('description');
            };

            const taskLabel = document.createElement('p');
            taskLabel.classList.add('task-label');
            taskLabel.textContent = taskLabels[i];
            
            if (event) {
                taskInfoContainer.append(taskLabel, editables[i]);
            } else {
                taskInfoContainer.append(taskLabel, taskItems[i]);
            }
            viewContainer.appendChild(taskInfoContainer);
        };
        document.body.insertBefore(viewContainer, document.getElementById('backdrop'));
    };

    // Allows users to edit task information once they are already created. Takes in the name of the task being edited and a list of each task component and returns a list of editable input elements for each task component
    function editTask(taskName, taskItemList) {
        // Creates select element that is avialable when user wants to edit priority level from card view
        let priorityLevel = ['High', 'Medium', 'Low'];
        const editablePriority = document.createElement('select');
        for (let i = 0; i < 3; i++) {
            const option = document.createElement('option');
            option.setAttribute('value', priorityLevel[i]);
            option.textContent = priorityLevel[i];
            if (priority === priorityLevel[i]) {
                option.setAttribute('selected', 'selected');
            }
            editablePriority.appendChild(option);
        }

        // Creates new input elements that users can enter information to edit task information
        const editableName = document.createElement('input');
        editableName.setAttribute('value', title);
        const editableDescription = document.createElement('textArea');
        editableDescription.value = `${description}`;
        const editableDueDate = document.createElement('input');
        editableDueDate.setAttribute('value', dueDate);
        editableDueDate.setAttribute('type', 'date');
        const editableDueTime = document.createElement('input');
        editableDueTime.setAttribute('value', dueTime);
        editableDueTime.setAttribute('type', 'time');
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        
        let editableList = [editableName, editableDescription, editableDueDate, editableDueTime, editablePriority, saveBtn]; // For appending editable elements into view card
        
        // Saves changes
        saveBtn.addEventListener('click', () => {
            // Updates local storage
            document.querySelectorAll('tbody').forEach(project => { // Looks for project in storage
                if (project.style.backgroundColor == "rgb(219, 127, 142)") {
                    let storedProject = JSON.parse(localStorage.getItem(`${project.firstElementChild.firstElementChild.textContent}`));
                    storedProject.forEach(task => {
                        if (task.title == taskName.textContent) { // Iterates through the task and updates each property
                            for (let i = 0; i < Object.keys(task).length; i++) {
                                if (Object.keys(task)[i] == 'title') {
                                    task.title = editableName.value;
                                } else if (Object.keys(task)[i] == 'description') {
                                    task.description = editableDescription.value;
                                } else if (Object.keys(task)[i] == 'date') {
                                    task.date = editableDueDate.value;
                                } else if (Object.keys(task)[i] == 'time') {
                                    task.time = editableDueTime.value;
                                } else if (Object.keys(task)[i] == 'priority') {
                                    task.priority = editablePriority.value;
                                };
                            };
                        };
                    });

                    localStorage.setItem(`${project.firstElementChild.firstElementChild.textContent}`, JSON.stringify(storedProject)); // Saves changes in local storages
                    
                    document.getElementById('taskTable').innerHTML = '';  // Clears and updates task table to reflect changes
                    storedProject.forEach(task => taskFactory(task.title, task.description, task.date, task.time, task.priority));
                    taskItemList.forEach((task, index) => task.textContent = `${editableList[index].value}`);
                    
                };
            });
            // Closes task view
            overlay.classList.toggle('overlay');
            document.body.removeChild(document.querySelector('.view-container'));
        });

        return editableList
    };

    // Removes a row from table
    function deleteTableRow() {
        table.removeChild(newRow);
        document.querySelectorAll('tbody').forEach(project => { // Removes task from local storage
            if (project.style.backgroundColor == "#DB7F8E") {
                let storedProject = JSON.parse(localStorage.getItem(`${project.firstElementChild.firstElementChild.textContent}`));
                storedProject.forEach(task => {
                    if (task.title == `${title}`) {
                        JSON.stringify(storedProject.splice(storedProject.indexOf(task), 1));
                        localStorage.setItem(`${project.firstElementChild.firstElementChild.textContent}` , JSON.stringify(storedProject));
                    };
                });
            };
        });
    };
};

export {taskFactory};