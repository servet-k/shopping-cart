import { useSelector, useDispatch } from "react-redux";
import { getCategory, reset } from "../features/product/productSlice";
import ListGroup from 'react-bootstrap/ListGroup';
import { select } from "../features/categories/categorySlice";

const Aside = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.cat);

  return (
    <aside className="aside">
      <p>Categories</p>
      <ListGroup as="ul">
        {categories.map((item) => {
          return (
            
            <ListGroup.Item as="li" active={item.isSelected}
              key={item.id}
              onClick={() => {
                
                dispatch(reset());
                dispatch(getCategory(item.id));
                dispatch(select(item.id))
              }}
            >
              {item.categoryName}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </aside>
  );
};

export default Aside;
