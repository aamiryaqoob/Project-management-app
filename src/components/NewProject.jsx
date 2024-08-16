import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, OnCancel }) {

    const model = useRef();

    const titleRef = useRef();
    const DesRef = useRef();
    const DueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDes = DesRef.current.value;
        const enteredDueDate = DueDateRef.current.value;

        if (enteredTitle.trim() === '' ||
            enteredDes.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            model.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDes,
            DuaDate: enteredDueDate
        });
    }


    return (
        <>
            <Modal ref={model} btnCaption="Okay">
                <h2 className="'text-xl font-bold text-stone-700 my-4'">Invalid Input</h2>
                <p className='text-stone-600 mb-4'>OOPS... enter a value</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={OnCancel}>
                            Cancel
                        </button>
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
        </>
    )
}