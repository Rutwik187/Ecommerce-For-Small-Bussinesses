import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        items: [],
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        addToCart: (state, action) => {
            // const item = state.cart.find(
            //     (p) => p._id === action.payload._id
            // );
            // if (item) {
            //     item.quantityNum++;
            //     item.productTotal = item.productTotal + item.oneQuantityPrice;
            // } else {
            //     state.cart = [...state.cart, action.payload.item];
            // }
            state.cart = [...state.cart, action.payload.item];
        },
        // updateCart: (state, action) => {
        //     state.cartItems = state.cartItems.map((p) => {

        //         if (p._id === action.payload.id) {
        //             if (action.payload.key === "quantityNum") {
        //                 p.productTotal =
        //                     p.oneQuantityPrice * action.payload.val;
        //             }
        //             return { ...p, [action.payload.key]: action.payload.val };
        //         }
        //         return p;
        //     });
        // },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (p) => p._id !== action.payload.id
            );
        },

        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item._id === action.payload.id) {
                    item.count++;
                }
                return item;
            });
        },

        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item._id === action.payload.id && item.count > 1) {
                    item.count--;
                }
                return item;
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { setItems, addToCart, removeFromCart, increaseCount, decreaseCount } = cartSlice.actions;

export default cartSlice.reducer;