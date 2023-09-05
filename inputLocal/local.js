document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from LocalStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display tasks from LocalStorage
    tasks.forEach(task => {
        displayTask(task);
    });

    // Function to display a task
    function displayTask(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);

        const checkbox = li.querySelector('input[type="checkbox"]');
        const deleteBtn = li.querySelector('.delete-btn');

        // Mark task as completed
        checkbox.addEventListener('change', () => {
            li.querySelector('span').classList.toggle('completed');
            updateLocalStorage();
        });

        // Delete task
        deleteBtn.addEventListener('click', () => {
            li.remove();
            updateLocalStorage();
        });
    }

    // Add new task
    addBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push(taskText);
            displayTask(taskText);
            updateLocalStorage();
            taskInput.value = '';
        }
    });

    // Update LocalStorage
    function updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
