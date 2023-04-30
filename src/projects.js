//Global variables
let counter = 0;

const projectFactory = (name) => {
    const table = document.getElementById('projectTable');
    const projectHeader = document.querySelector('.project-name');
    const newBody = document.createElement('tbody');
    const newRow = document.createElement('tr');
    const projectName = document.createElement('td');

    // Changes background color of row to indicate which project is being selected.
    newBody.addEventListener('click', () => {
        document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: transparent;")
        newBody.style.cssText = "background-color: rgb(255, 255, 255, 0.5);"
        projectHeader.textContent = name;
    });

    projectHeader.textContent = name;
    projectName.textContent = name;
    newBody.appendChild(newRow);
    newRow.appendChild(projectName);

    const addProjectOptions = () => {
        let projectOptions = ['./images/edit.svg', './images/icons8-trash-30.png'];
        let classNames = [`project-edit-${counter}`, `project-trash-${counter}`];

        for (let i = 0; i < 2; i++) {
            const newCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = projectOptions[i];
            img.classList.add(classNames[i]);
            newCell.appendChild(img);
            newRow.appendChild(newCell);
        };
        counter++
    };
    addProjectOptions();
    table.appendChild(newBody);

    const deleteProject = () => {
        table.removeChild(newRow);
    };

    // Allows the user to change the current name of the project once it has been created
    const editProjectName = () => {
        // Replaces element with input element and adds a save button used to push the name change
        const editableName = document.createElement('input');
        const saveName = document.createElement('button');
        saveName.textContent = 'Save';
        projectName.replaceWith(editableName);
        editableName.parentNode.insertBefore(saveName, editableName.nextSibling)

        saveName.addEventListener('click', () => {
            projectName.textContent = editableName.value;
            projectHeader.textContent = editableName.value;
            editableName.replaceWith(projectName);
            saveName.parentNode.removeChild(saveName);
        });
    };

    // Saving project to local storage
    localStorage.setItem(`${name}`, JSON.stringify([]));

    console.log(document.querySelectorAll('tbody'));
    console.log('value', newBody.firstElementChild.firstElementChild.textContent);
    return {editProjectName}
};

export {projectFactory}

