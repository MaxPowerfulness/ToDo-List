// Globabl varibales
import { add } from "date-fns";
let counter = 0

// Factory function usesd to create and append new tasks to the task table. 
const taskFactory = (title, description, dueDate, dueTime, priority) => {
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const taskInfo = document.createElement('td');
    taskInfo.innerHTML = `${title} <br> ${dueTime} ${dueDate}`;

    // Sets border color to indiciate priority level of a task item
    switch (priority) {
        case 'High':
            taskInfo.style.cssText = 'border-left: 3px solid red;';
            break
        case 'Medium':
            taskInfo.style.cssText = 'border-left: 3px solid yellow;';
            break
        case 'Low':
            taskInfo.style.cssText = 'border-left: 3px solid green;';
            break
    };
    newRow.appendChild(taskInfo);

    // Adds icons/features present in all task items
    const addTaskOptions = () => {
        let taskOptions = ['./images/edit.svg', './images/icons8-trash-30.png', './images/icons8-eye-30.png'];
        let classNames = [`edit-${counter}`, `trash-${counter}`, `view-${counter}`];
        for (let i = 0; i <= 2; i++) {
            const newCell = document.createElement('td');
            const img = document.createElement('img');
            img.src=taskOptions[i];
            img.classList.add(classNames[i]);
            newCell.appendChild(img);
            newRow.appendChild(newCell);
        };
        counter++
    };

    addTaskOptions();
    table.appendChild(newRow);

    // Allows user to view the task information in a card format
    function viewTask(title, description, dueDate, dueTime, priority, event) {
        const viewContainer = document.createElement('div');
        viewContainer.classList.add('view-container');
        const taskName = document.createElement('h1');
        const taskDescription = document.createElement('p');
        const taskDueDate = document.createElement('span');
        const taskDueTime = document.createElement('span');
        const taskPriority = document.createElement('p');
        
        // Creates select element that is avialable when user wants to edit priority level from card view
        let priorityLevel = ['High', 'Medium', 'Low'];
        const taskSelection = document.createElement('select');
        for (let i = 0; i < 3; i++) {
            const option = document.createElement('option');
            option.setAttribute('value', priorityLevel[i]);
            option.textContent = priorityLevel[i];
            taskSelection.appendChild(option);
        }

        taskName.textContent = title;
        taskDescription.textContent = description;
        taskDueDate.textContent = dueDate;
        taskDueTime.textContent = dueTime;
        taskPriority.textContent = priority;
        switch (priority) { // Sets task card border depending on priority level
            case 'High':
                viewContainer.style.cssText = 'border: 3px solid red;';
                break
            case 'Medium':
                viewContainer.style.cssText = 'border: 3px solid yellow;';
                break
            case 'Low':
                viewContainer.style.cssText = 'border: 3px solid green;';
                break
        };
        let taskItems = [taskName, taskDueDate, taskDueTime, taskDescription, taskPriority]; // List for appending task elements into viewContainer
        document.body.insertBefore(viewContainer, document.getElementById('backdrop'));
        for (let i = 0; i < 5; i++) {
            if (event) { 
                if (taskItems[i] == taskPriority) {
                    taskItems[i] = taskSelection;
                } else {
                    taskItems[i].setAttribute('contentEditable', 'true'); // Makes the card editable if the edit button is clicked
                }
            };
            viewContainer.appendChild(taskItems[i]);
        }
    }


    // Removes row from table
    function deleteTableRow() {
        table.removeChild(newRow);
    };
    
    return {deleteTableRow, viewTask}
};

export {taskFactory};