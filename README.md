# 🗂️ Simple Kanban Board

## 📌 Overview

This is a simple **Kanban Board** built using **HTML, CSS, and JavaScript**.
It allows users to **drag and drop tasks** between different columns like:

- To Do
- Progress
- Done

---

## 🚀 Features

- ✅ Drag and drop tasks between columns
- ✅ Multiple task cards
- ✅ Visual highlight while dragging
- ✅ Beginner-friendly project

---

## 🛠️ Technologies Used

- HTML5 (Drag & Drop API)
- CSS3 (Styling & Layout)
- JavaScript (DOM & Events)

---

## 📂 Project Structure

```
kanban-board/
│── index.html
│── style.css
│── script.js
```

---

## 📄 How It Works

1. Each task card is made draggable using:

   ```
   draggable="true"
   ```

2. When dragging starts:
   - The card ID is stored using `dataTransfer`

3. The column allows dropping using:

   ```
   e.preventDefault()
   ```

4. On drop:
   - The selected card is appended to the new column

---

## 💻 Code Logic

### Drag Start

```
e.dataTransfer.setData("text/plain", this.id);
```

### Allow Drop

```
e.preventDefault();
```

### Drop Element

```
const id = e.dataTransfer.getData("text/plain");
const card = document.getElementById(id);
this.appendChild(card);
```

---

## ▶️ How to Run

1. Download or copy the project files
2. Open `index.html` in any browser
3. Drag tasks between columns

---

## ⚠️ Important Notes

- Each card must have a **unique ID**
- Use `draggable="true"` for drag support
- Do not use duplicate IDs for lists

---

## 💡 Future Improvements

- ➕ Add new tasks
- ❌ Delete tasks
- 💾 Save data using localStorage
- 📱 Mobile touch support
- 🎯 Drag sorting inside column

---

## 📜 License

This project is free to use for learning purposes.

---

## 🙌 Author

Created as a beginner Kanban drag-and-drop project.

Gunasekar M
