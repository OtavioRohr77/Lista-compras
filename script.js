function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        
        
        const listItem = document.createElement("li");
        
        
        listItem.textContent = taskText;
        
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.classList.add("remove-btn");
        
     
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        
        listItem.appendChild(removeButton);
        
       
        taskList.appendChild(listItem);
        

        taskInput.value = "";
    } else {
        alert("Digite um item para adicionar à lista.");
    }
}