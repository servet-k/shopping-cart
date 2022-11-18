import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../features/cart/cartSlice";
import Button from "react-bootstrap/Button";
import icon from "./images/shopping-cart-10982.png";
import Table from 'react-bootstrap/Table';
import alertify from "alertifyjs"

const Main = () => {
  // const { categories } = useSelector((state) => state.cat);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  //console.log(products);
  return (
    <main>
      <Table striped bordered hover>
      <thead>
        <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units in stock</th>
          </tr>      
        </thead>
      <tbody>
      
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.productName}</td>
                <td>{item.unitPrice}</td>
                <td>{item.quantityPerUnit}</td>
                <td>{item.unitsInStock}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => 
                      {dispatch(addtoCart(item));
                        alertify.success(item.productName+" added to cart")
                      }}
                  >
                    Add to{" "}
                    <span>
                      <img src={icon} alt="icon" width="20px" />
                    </span>
                  </Button>
                </td>
              </tr>
            );
            // }
          })}
      </tbody>
    </Table>
      
    </main>
  );
};

export default Main;
