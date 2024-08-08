import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
    const titleRef = useRef();
    const DesRef = useRef();
    const DueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDes = DesRef.current.value;
        const enteredDueDate = DueDateRef.current.value;

        //validation ...

        onAdd({
            title: enteredTitle,
            description: enteredDes,
            DuaDate: enteredDueDate
        });
    }


    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}>
                        Save</button>
                </li>
            </menu>
            <Input type="text" ref={titleRef} label="Title" />
            <Input ref={DesRef} label="Description" textarea />
            <Input type="date" ref={DueDateRef} label="Due Date" />
        </div>
    )
}