// ===== STATE ===== 
let todos = JSON.parse(localStorage.getItem("todos")) || [];
// ===== DOM ELEMENTS ===== 
const form = document.querySelector("#form-todo");
const input = document.querySelector("#input-todo");
const list = document.querySelector("#list-todo");
const stats = document.querySelector("#stats");
// ===== FUNCTIONS ===== 
function simpan() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function render() {
    list.innerHTML = "";
    if (todos.length === 0) {
        list.innerHTML = "<li><span class='teks'>Belum ada tugas. Tambahkan!</span ></li > ";
        stats.textContent = "0 tugas belum selesai";
        return;
    }
    todos.forEach((todo) => {
        const li = document.createElement("li");
        if (todo.selesai) li.classList.add("selesai");
        li.innerHTML = ` 
<input type="checkbox" ${todo.selesai ? "checked" : ""} data
id="${todo.id}"> 
<span class="teks">${todo.teks}</span> 
<button class="hapus" data-id="${todo.id}">Hapus</button> 
`;
        list.appendChild(li);
    });
    const belum = todos.filter(t => !t.selesai).length;
    stats.textContent = `${belum} tugas belum selesai`;
}
function tambahTodo(teks) {
    todos.push({
        id: Date.now(),
        teks: teks.trim(),
        selesai: false
    });
    simpan();
    render();
}
function hapusTodo(id) {
    todos = todos.filter(t => t.id !== id);
    simpan();
    render();
}
function toggleSelesai(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.selesai = !todo.selesai;
        simpan();
        render();
    }
}
// ===== EVENTS ===== 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        tambahTodo(input.value);
        input.value = "";
    }
});
list.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        toggleSelesai(Number(e.target.dataset.id));
    }
});
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("hapus")) {
        hapusTodo(Number(e.target.dataset.id));
    }
});
// ===== INIT ===== 
render(); 