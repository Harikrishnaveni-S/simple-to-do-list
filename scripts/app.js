const taskList = document.querySelector('.task-list')
const addTaskButton = document.querySelector('#addTask')
const taskInput = document.querySelector('#taskInput')

displayData()

function addTask() {
    if (taskInput.value === '') {
        alert('Please enter a task')
    }
    else {
        const taskValue = taskInput.value;
        let task = document.createElement('li');
        task.classList.add('listedTask');
        taskList.appendChild(task);
        task.innerHTML = taskValue;

        let closeIcon = document.createElement('span');
        closeIcon.innerHTML = '&#10006';
        closeIcon.classList.add('close')
        task.appendChild(closeIcon);
        taskInput.value = ''
        saveLocalData()
    }
}

addTaskButton.addEventListener('click', addTask);

function handleTaskClick(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveLocalData()
    }

    if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveLocalData()
    }
}

taskList.addEventListener('click', handleTaskClick);

function saveLocalData() {
    try {
        localStorage.setItem('data', taskList.innerHTML);
    } catch (error) {
        console.error('Error saving data to local storage:', error);
    }
}

function displayData() {
    try {
        taskList.innerHTML = localStorage.getItem('data');
    } catch (error) {
        console.error('Error loading data from local storage:', error);
    }
}
