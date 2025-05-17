import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [{ id: 1, name: "Laptop", quantity: 1, price: 1200 }, 
      { id: 2, name: "Headphones", quantity: 1, price: 200 } 
],
  totalAmount: 1400 ,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      updateTotal(state);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      updateTotal(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity++;
      updateTotal(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
      updateTotal(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

//function to automatically update total amount.
const updateTotal = (state) => {
  state.totalAmount = state.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
};

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
