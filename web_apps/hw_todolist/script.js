function addTask() {
     const taskText = document.getElementById('new-task').value.trim();
     if (taskText === ''){
        document.getElementById("res").innerHTML = "please enter some text";
     }
     const todolist = document.getElementById('to-do-list');

     const li = document.createElement('li');
     
     li.className = 'to-do-item';

     const taskSpan = document.createElement('span');
     taskSpan.textContent = taskText;

     const deleteBtn = document.createElement('button')
     deleteBtn.textContent = 'Delete';
     deleteBtn.className = 'delete-btn';
     deleteBtn.onclick= function(){
        todolist.removeChild(li);
     };

     li.appendChild(taskSpan);
     li.appendChild(deleteBtn);
     todolist.appendChild(li);
}