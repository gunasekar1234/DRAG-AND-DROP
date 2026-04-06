// ===============================
// GLOBAL VARIABLES
// ===============================
const lists = document.querySelectorAll(".list");
const input = document.getElementById("taskInput");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ===============================
// INIT LOAD
// ===============================
window.onload = () => {
    renderTasks();
};

// ===============================
// ADD TASK
// ===============================
function addTask() {
    const text = input.value.trim();

    if (text === "") return;

    const newTask = {
        id: Date.now(),
        text: text,
        status: "todo"
    };

    tasks.push(newTask);
    saveAndRender();

    input.value = "";
}

// ===============================
// RENDER TASKS
// ===============================
function renderTasks() {
    document.querySelectorAll(".card").forEach(card => card.remove());

    tasks.forEach(task => {
        const card = createCard(task);
        document.getElementById(task.status).appendChild(card);
    });

    updateCount();
}

// ===============================
// CREATE CARD
// ===============================
function createCard(task) {
    const card = document.createElement("div");
    card.className = "card";
    card.draggable = true;
    card.id = task.id;

    card.innerHTML = `
        ${task.text}
        <span class="delete" onclick="deleteTask(${task.id})">❌</span>
    `;

    // Drag Events
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);

    return card;
}

// ===============================
// DELETE TASK
// ===============================
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveAndRender();
}

// ===============================
// DRAG EVENTS
// ===============================
function dragStart(e) {
    e.dataTransfer.setData("id", this.id);
    this.classList.add("dragging");
}

function dragEnd() {
    this.classList.remove("dragging");
}

// ===============================
// DROP EVENTS
// ===============================
lists.forEach(list => {
    list.addEventListener("dragover", e => e.preventDefault());

    list.addEventListener("drop", function(e) {
        const id = e.dataTransfer.getData("id");

        tasks = tasks.map(task => {
            if (task.id == id) {
                task.status = this.id;
            }
            return task;
        });

        saveAndRender();
    });
});

// ===============================
// SAVE + RENDER
// ===============================
function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// ===============================
// UPDATE COUNTS
// ===============================
function updateCount() {
    const counts = {
        todo: 0,
        progress: 0,
        done: 0
    };

    tasks.forEach(task => counts[task.status]++);

    document.getElementById("todo-count").innerText = counts.todo;
    document.getElementById("progress-count").innerText = counts.progress;
    document.getElementById("done-count").innerText = counts.done;
}