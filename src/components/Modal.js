import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux"
import { closeModal } from "../features/Modal/modalSlice";

const Modal = () => {
    const dispatch = useDispatch();
    return (
        <aside className="modal-container">
            <div className="model">
                <h4>Remove all items from shopping-cart?</h4>
                <div className="btn-container">
                    <button className="confirm" onClick={() => {
                        dispatch(clearCart());
                        dispatch(closeModal())
                    }}>Confirm</button>
                    <button className="cancel" onClick={() => dispatch(closeModal())}>Cancel</button>
                </div>
            </div>
        </aside>

    )
}

export default Modal;