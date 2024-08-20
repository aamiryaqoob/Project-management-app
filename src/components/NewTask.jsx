import { useState } from "react"

export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState();

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        onAdd(enteredTask);
        setEnteredTask('');
    }
    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 rounded-sm py-1 px-2 bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
            />
            <button className="text-stone-700 hover:text-stone-950"
                onClick={handleClick}
            >Add Task</button>
        </div>
    )
}