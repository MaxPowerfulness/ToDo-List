//Global Variables
const tasks = Object.values(localStorage);

//Functions


function sortAllTasksByDate(list) {
    list.sort((a, b) => {
        if (a.date > b.date) {
            return 1;
        } else if (a.date === b.date) {
            if (a.time > b.time) {
                return 1;
            } else {return -1}
        } else {return -1}
    });
};

function displayTodayTasks(list) {
    let currentDate = new Date().toJSON().slice(0, 10);
    let todaysTasks = [];
    list.forEach(task => {
        if (task.date == currentDate) {
            todaysTasks.push(task);
        };
    });

    return todaysTasks;
};

function displayWeekTasks(list) {
    let weekTasks = [];
    let weekOutDates = [];

    for (let i = 0; i < 8; i++) { // To get all dates a week from the current date
        weekOutDates.push(new Date(Date.now() + i * 24 * 60 * 60 * 1000).toJSON().slice(0, 10) )
    };
    list.forEach(task => { // Checks if a task's date is within a week of the current date by comparing the task date to each date 7 days out
        for (let i = 0; i < weekOutDates.length; i++) {
            if (task.date == weekOutDates[i]) {weekTasks.push(task)};
        };
    });

    return weekTasks;
};

function displayMonthTasks(list) {
    let monthTasks = [];
    let monthOutDates = [];
    for (let i = 0; i < 32; i++) { // To get all dates a month from the current date
        monthOutDates.push(new Date(Date.now() + i * 24 * 60 * 60 * 1000).toJSON().slice(0, 10) )
    };
    list.forEach(task => {
        for (let i = 0; i < monthOutDates.length; i++) {
            if (task.date == monthOutDates[i]) {monthTasks.push(task)};
        };
    });

    return monthTasks;
};

function displayByPriority(list) {
    let priorityTasks = [];
    const priorityLevels = ['High', 'Medium', 'Low'];
    for (let i = 0; i < priorityLevels.length; i++) {
        list.forEach(task => { // Iterates through task list and appends tasks with highest priority first followed by medium and low
            if (task.priority === priorityLevels[i]) {
                priorityTasks.push(task);
            };
        });
    };

    return priorityTasks;
};


export {sortAllTasksByDate, displayTodayTasks, displayWeekTasks, displayMonthTasks, displayByPriority};




