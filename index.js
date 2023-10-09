document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    function createTaskItem(taskText) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="editButton"><i class="fas fa-pencil-alt"></i> Edit</button>
            <button class="deleteButton"><i class="fas fa-trash-alt"></i> Delete</button>
        `;

        // Adding event listener to the edit button
        const editButton = listItem.querySelector(".editButton");
        editButton.addEventListener("click", function() {
            const newText = prompt("Edit the task:", taskText);
            if (newText !== null) {
                listItem.querySelector("span").textContent = newText;
            }
        });

        // Adding event listener to the delete button
        const deleteButton = listItem.querySelector(".deleteButton");
        deleteButton.addEventListener("click", function() {
            listItem.querySelector("span").classList.add("completed");
            deleteButton.style.display = "none";
        });

        return listItem;
    }

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = createTaskItem(taskText);

            taskList.appendChild(listItem);
            taskInput.value = "";
        } else {
            alert("Please enter a task!"); // Show an alert if the input is empty
        }
    });

    // Adding event listener to handle pressing Enter key
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
