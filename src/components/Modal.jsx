import { createPortal } from "react-dom"
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Model({ Children, btnCaption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModel();
            }
        };
    });
    return createPortal(
        <dialog ref={dialog}>
            {Children}
            <form method="dialog">
                <button>{btnCaption}</button>
            </form>
        </dialog>, document.getElementById('modal-root'));
});
export default Modal;