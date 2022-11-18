import { useSelector,useDispatch } from "react-redux"
import Table from 'react-bootstrap/Table';
import icon from "./images/delete-100.png";
import {removeItem} from "../features/cart/cartSlice"
import Button from 'react-bootstrap/Button';
import {openModal} from "../features/Modal/modalSlice"
import alertify from "alertifyjs"



function Cart() {
  const { cart } = useSelector(state => state.cart);
  
  const dispatch=useDispatch();
  const total = cart.map(element => { return element.unitPrice * element.amount; });

  const total_amount = total.reduce((a, b) => a + b, 0);
 
  return (
    <div className="cart-list">
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>amount</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.productName}</td>
                <td>{item.unitPrice}</td>
                <td>{item.amount}</td>
                <td>{item.unitPrice * item.amount}</td>
                <td onClick={()=>{dispatch(removeItem(item.id));
                   alertify.error(item.productName+ " removed") }}><Button variant="danger">Delete</Button><span><img src={icon} alt="icon" width="20px"
                /></span></td>
              </tr>
            );
          })}
        </tbody>


      </Table>
      <p >Total  {total_amount}</p>
      <Button variant="danger" onClick={()=>dispatch(openModal())}>Clear Cart</Button>
    </div>
  );
}

  export default Cart;
