export default function TodoItem({ todo, onHapus, onToggle }) {
    return (
        <li className={todo.selesai ? "selesai" : ""}>
            <input
                type="checkbox"
                checked={todo.selesai}
                onChange={() => onToggle(todo.id)}
            />
            <span className="teks">{todo.teks}</span>
            <button className="hapus" onClick={() => onHapus(todo.id)}>
                Hapus
            </button>
        </li>
    );
} 