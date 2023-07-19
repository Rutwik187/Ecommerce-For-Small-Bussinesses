import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find(
                (p) => p._id === action.payload._id
            );
            if (item) {
                item.quantityNum++;
                item.productTotal = item.productTotal + item.oneQuantityPrice;
            } else {
                state.cartItems.push({ ...action.payload });
            }
        },
        updateCart: (state, action) => {
            state.cartItems = state.cartItems.map((p) => {

                if (p._id === action.payload.id) {
                    if (action.payload.key === "quantityNum") {
                        p.productTotal =
                            p.oneQuantityPrice * action.payload.val;
                    }
                    return { ...p, [action.payload.key]: action.payload.val };
                }
                return p;
            });
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (p) => p._id !== action.payload.id
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;