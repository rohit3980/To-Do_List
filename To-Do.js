document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        
        newTask.innerHTML = `
            ${taskText}
            <button class="delete">Delete</button>
        `;
        
        taskList.appendChild(newTask);
        taskInput.value = '';
        
        newTask.querySelector('.delete').addEventListener('click', function() {
            taskList.removeChild(newTask);
        });
    }
});
