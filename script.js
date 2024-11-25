const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const errorMessage = document.getElementById("error-message");
document.getElementById("close-modal").addEventListener("click", function() {
document.getElementById("modal").style.display = "none";


});


window.onload = function () {
    fetchTodos();
};

function fetchTodos() {
    fetch("https://js1-todo-api.vercel.app/api/todos?apikey=952ae62c-48ad-4370-b845-d6cd59113b90")
        .then(response => response.json())
        .then(data => {
            listContainer.innerHTML = ""; 
            data.forEach(todo => {
                let li = document.createElement("li");
                li.innerHTML = todo.title;
                li.dataset.id = todo._id;

                
                if (todo.completed) {
                    li.classList.add("checked");
                }

                listContainer.appendChild(li);

                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            });
        })
        .catch(error => console.error("Error:", error));
}


function addTask() {
    errorMessage.textContent = "";
    if (inputbox.value.trim() === "") {
        errorMessage.textContent = "Please add task";
    } else {
        fetch("https://js1-todo-api.vercel.app/api/todos?apikey=952ae62c-48ad-4370-b845-d6cd59113b90", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: inputbox.value })
        })
        .then(response => response.json())
        .then(data => { 
            let li = document.createElement("li");
            li.innerHTML = inputbox.value;
            li.dataset.id = data._id;
            listContainer.appendChild(li);
            inputbox.value = "";

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);

            console.log("Task added:", data.title);
        })
        .catch(error => {
            errorMessage.textContent = "Error adding task: " + error;
        });
    }
}

function updateTaskStatus(id, completed) {
    fetch(`https://js1-todo-api.vercel.app/api/todos/${id}?apikey=952ae62c-48ad-4370-b845-d6cd59113b90`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed: completed })
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Task with ID ${id} updated to completed: ${completed}`);
    })
    .catch(error => console.error("Error updating task:", error));
}

function deleteTask(id, liElement) {
    fetch(`https://js1-todo-api.vercel.app/api/todos/${id}?apikey=952ae62c-48ad-4370-b845-d6cd59113b90`, {
        method: "DELETE"
    })
    .then(response => {
        if (response.ok) {
            console.log(`Task with ID ${id} deleted.`);
            liElement.remove();
        } else {
            console.error("Error deleting task.");
        }
    })
    .catch(error => console.error("Error deleting task:", error));
}



listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        let completed = e.target.classList.contains("checked");
        updateTaskStatus(e.target.dataset.id, completed);
    } else if (e.target.tagName === "SPAN") {
        let liElement = e.target.parentElement;
        let id = liElement.dataset.id;
        if (!liElement.classList.contains("checked")) {
            document.getElementById("modal").style.display = "flex";
        } else {
            deleteTask(id, liElement); 
        }
    }
}, false);

inputbox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
