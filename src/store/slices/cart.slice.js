import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce, getConfig } from "../../utils/configAxios";

const initialState = {
    products: [],
    isShownCart: false
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        changeIsShownCard: (state) => {
            state.isShownCart = !state.isShownCart
        },
        setProducts: (state, action) =>{
            const newProducts = action.payload
            state.products = newProducts
        }
    }
})

export const {changeIsShownCard, setProducts} = cartSlice.actions

export const getCartProducts = () => (dispatch) => {
axiosEcommerce.get("cart", getConfig())
.then((res)=>dispatch(setProducts(res.data)))
.catch((err)=>console.log(err))
}

export const addProductCart = (data) => (dispatch) => {
    axiosEcommerce.post("cart", data, getConfig())
    .then( () => dispatch(getCartProducts()))
    .catch(err=> console.log(err))
}

export const deleteProductCart = (id) => (dispatch) => {
    axiosEcommerce.delete("cart/"+id, getConfig())
    .then( () => dispatch(getCartProducts()))
    .catch(err=> console.log(err))
}

export const purchaseCart = () => (dispatch) =>{
    axiosEcommerce.post("purchases", {}, getConfig())
    .then(()=> dispatch(getCartProducts()))
    .catch(err=>console.log(err))
}

export default cartSlice.reducer