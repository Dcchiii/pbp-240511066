export default function TodoStats({ todos }) {
    const belum = todos.filter(t => !t.selesai).length;
    return <p className="stats">{belum} tugas belum selesai</p>;
} 