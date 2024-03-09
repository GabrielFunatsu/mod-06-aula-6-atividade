import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();
// Componente Provider
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

// Componente Consumidor
// const MyComponent = () => {
//   const { data, setData } = useContext(MyContext);
//   return (
//     <div>
//       <p>{data}</p>
//       <button onClick={() => setData("Novos dados do contexto")}>
//         Atualizar Contexto
//       </button>
//     </div>
//   );
// };
