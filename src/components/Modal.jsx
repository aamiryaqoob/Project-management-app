import { createPortal } from "react-dom"
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Model({ children, btnCaption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });
    return createPortal(
        <dialog ref={dialog}>
            {children}
            <form method="dialog">
                <button>{btnCaption}</button>
            </form>
        </dialog>, document.getElementById('modal-root'));
});
export default Modal;