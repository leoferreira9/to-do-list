"use strict";
let count = 0;
let addTaskBtn = document.getElementById('newTaskBtn');
let addTaskInput = document.getElementById('newTaskInput');
addTaskBtn.addEventListener('click', () => {
    if (addTaskInput.value.length === 0) {
        alert('Por favor, insira alguma atividade válida!');
        return;
    }
    count++;
    let taskArea = document.getElementById('tasks-area');
    let inputAreaText = document.getElementById('newTaskInput');
    let div = document.createElement('div');
    div.id = `div-task${count}`;
    div.classList.add('task');
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = `task${count}`;
    input.id = `task${count}`;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.id = 'deleteBtn';
    let label = document.createElement('label');
    label.setAttribute('for', `${input.id}`);
    label.innerText = inputAreaText.value;
    div.append(input, label);
    taskArea.append(div, deleteBtn);
    addTaskInput.value = '';
    deleteBtn.addEventListener('click', () => {
        const elementToDelete = deleteBtn.previousElementSibling;
        elementToDelete?.remove();
        deleteBtn.remove();
        count--;
    });
});
addTaskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        if (addTaskInput.value.length === 0) {
            alert('Por favor, insira alguma atividade válida!');
            return;
        }
        else {
            count++;
            let taskArea = document.getElementById('tasks-area');
            let inputAreaText = document.getElementById('newTaskInput');
            let div = document.createElement('div');
            div.id = `div-task${count}`;
            div.classList.add('task');
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.name = `task${count}`;
            input.id = `task${count}`;
            let label = document.createElement('label');
            label.setAttribute('for', `${input.id}`);
            label.innerText = inputAreaText.value;
            let deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
            deleteBtn.id = 'deleteBtn';
            deleteBtn.addEventListener('click', () => {
                const elementToDelete = deleteBtn.previousElementSibling;
                elementToDelete?.remove();
                deleteBtn.remove();
                count--;
            });
            div.append(input, label);
            taskArea.append(div, deleteBtn);
            addTaskInput.value = '';
        }
    }
});
