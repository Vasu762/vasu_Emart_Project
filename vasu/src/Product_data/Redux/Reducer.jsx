import { ADD_TO_CART , REMOVE_TO_CART ,EMPTY_CART } from "./Constant";

const getCartDataFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : [];
}

const reducer =(state = getCartDataFromLocalStorage(), action) => {
    switch(action.type){
        case ADD_TO_CART:
            // console.warn('addToCartReducer Called', action);
            // const updatedCartAdd = [action.data , ...state]
            // localStorage.setItem['cart',JSON.stringify(updatedCartAdd)]
            // return updatedCartAdd;

            const existingProduct = state.findIndex(item => item.id === action.data.id)
            let updateCartData;

            if(existingProduct >= 0){
                updateCartData= state.map((item) => item.id === action.data.id ? {...item , quantity:item.quantity += 1} : item)
            } else {
                updateCartData = [{...action.data , quantity:1} , ...state]
            }
            localStorage.setItem("cart",JSON.stringify(updateCartData))
            return updateCartData;

        case REMOVE_TO_CART:
            // console.warn('removeToCartReducer Called', action);
            const updatedCartRmove = state.filter(item => item.id !== action.data)
            localStorage.setItem('cart' ,JSON.stringify(updatedCartRmove))
            return updatedCartRmove
        
        case EMPTY_CART:
            // console.warn('emptyCartReducer Called',action);
            localStorage.removeItem('cart')
            return []
        
        default: return state
    }
}

export default reducer
