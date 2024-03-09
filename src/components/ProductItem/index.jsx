import PropTypes from "prop-types";
import { CartContext } from "../CartProvider";
import { useContext } from "react";

const ProductItem = ({ itemKey, product }) => {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);

  const handleAdd = () => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <li key={itemKey}>
        {product.title}
        <button onClick={handleAdd}>Adicionar</button>
      </li>
    </>
  );
};

ProductItem.propTypes = {
  itemKey: PropTypes.number,
  product: PropTypes.object,
};

export { ProductItem };
