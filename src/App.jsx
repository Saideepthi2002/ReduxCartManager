// import { useDispatch,useSelector } from "react-redux";
import "./App.css";
// import React from "react";
// import { addItem,removeItem,increaseQuantity,decreaseQuantity,clearCart } from "./features/cart/cartSlice";

// const App = () => {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.cart.items);
//   console.log(items);
//   const amount = useSelector((state) => state.cart.totalAmount);
//   return (
//     <div>
//       <h1>Cart Manager</h1>

//       <div className="container">
//         {items.map((ele) => (
//           <div key={ele.id}>
//             <p>
//               <strong>Product:</strong>
//               {ele.name}
//             </p>
//             <div>
//               <p>
//                 <strong>Quantity:</strong>
//                 {ele.quantity}

//                 <span>
//                   <button onClick={()=>dispatch(increaseQuantity(ele.id))}>+</button>
//                 </span>
//                 <span>
//                   <button onClick={()=>dispatch(decreaseQuantity(ele.id))}>-</button>
//                 </span>
//               </p>
//               <p>
//                 <strong>Price:</strong>
//                 {ele.price}
//               </p>
//               <button onClick={()=>dispatch(removeItem(ele.id))}>Remove Item</button>
//             </div>
//           </div>
//         ))}
//         <p><strong>TotalAmount:</strong>{amount}</p>
//         <button onClick={()=>dispatch(clearCart)}>Clear Cart</button>
//       </div>
//     </div>
//   );
// };

// export default App;



// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addItem,
//   removeItem,
//   increaseQuantity,
//   decreaseQuantity,
//   clearCart,
// } from "./features/cart/cartSlice";
// import "./App.css";

// const App = () => {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.cart.items);
//   const amount = useSelector((state) => state.cart.totalAmount);

//   return (
//     <div className="app">
//       <h1>🛒 Cart Manager</h1>

//       <div className="add-buttons">
//         <h2>Add Items to Cart</h2>
//         <button onClick={() => dispatch(addItem({ id: 1, name: "Laptop", price: 1200 }))}>
//           Add Laptop
//         </button>
//         <button onClick={() => dispatch(addItem({ id: 2, name: "Headphones", price: 200 }))}>
//           Add Headphones
//         </button>
//         <button onClick={() => dispatch(addItem({ id: 3, name: "Mouse", price: 100 }))}>
//           Add Mouse
//         </button>
//         <button onClick={() => dispatch(addItem({ id: 4, name: "Monitor", price: 300 }))}>
//           Add Monitor
//         </button>
//       </div>

//       <div className="cart">
//         {items.length === 0 ? (
//           <p className="empty">Cart is empty</p>
//         ) : (
//           items.map((item) => (
//             <div className="cart-item" key={item.id}>
//               <h3>{item.name}</h3>
//               <p>Price: ${item.price}</p>
//               <p>
//                 Quantity: {item.quantity}{" "}
//                 <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
//                 <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
//               </p>
//               <p>Total: ${item.price * item.quantity}</p>
//               <button className="remove" onClick={() => dispatch(removeItem(item.id))}>
//                 Remove
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       <div className="footer">
//         <h2>Total Amount: ${amount}</h2>
//         <button className="clear" onClick={() => dispatch(clearCart())}>
//           Clear Cart
//         </button>
//         <button className="checkout">Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addItem,
//   removeItem,
//   increaseQuantity,
//   decreaseQuantity,
//   clearCart,
// } from "./features/cart/cartSlice";
// import "./App.css";

// const products = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Headphones", price: 200 },
//   { id: 3, name: "Mouse", price: 100 },
//   { id: 4, name: "Monitor", price: 300 },
// ];

// const App = () => {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.cart.items);
//   const amount = useSelector((state) => state.cart.totalAmount);

//   return (
//     <div className="shop-container">
//       <h1 className="main-title">🛒 Modern Cart Manager</h1>

//       <div className="grid">
//         {/* Product Section */}
//         <div className="products">
//           <h2>Products</h2>
//           {products.map((product) => (
//             <div className="product-card" key={product.id}>
//               <h3>{product.name}</h3>
//               <p>Price: ${product.price}</p>
//               <button onClick={() => dispatch(addItem(product))}>
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Cart Section */}
//         <div className="cart">
//           <h2>Your Cart</h2>
//           {items.length === 0 ? (
//             <p className="empty">Your cart is empty</p>
//           ) : (
//             items.map((item) => (
//               <div className="cart-item" key={item.id}>
//                 <div className="cart-item-info">
//                   <h4>{item.name}</h4>
//                   <p>${item.price} x {item.quantity}</p>
//                 </div>
//                 <div className="quantity-controls">
//                   <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
//                 </div>
//                 <button className="remove" onClick={() => dispatch(removeItem(item.id))}>✖</button>
//               </div>
//             ))
//           )}
//           <div className="cart-footer">
//             <h3>Total: ${amount}</h3>
//             <button className="clear" onClick={() => dispatch(clearCart())}>
//               Clear Cart
//             </button>
//             <button className="checkout">Checkout</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "./features/cart/cartSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const amount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="cart-container">
      <h1 className="header">Cart Manager</h1>

      <div className="cart-box">
        <h2 className="cart-title">Shopping Cart</h2>

        {items.length === 0 ? (
          <p className="empty">Your cart is empty!!!</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="cart-row">
              <div className="cart-details">

                <p><strong>Product:</strong> {item.name}</p>
                <p><strong>Price:</strong> ${item.price * item.quantity}</p>
              
              </div>
              <div className="cart-controls">
                <p>
                  <strong>Quantity:</strong> {item.quantity}
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  <button onClick={() => dispatch(removeItem(item.id))} className="remove-btn">
                    Remove
                  </button>
                </p>
              </div>
            </div>
          ))
        )}

        <hr />
        <div className="total">
          <strong>Total Amount:</strong> ${amount}
        </div>
        <div className="cart-actions">
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default App;
