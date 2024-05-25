import { ADD_TO_WISHLIST  } from "./Constant";

const getWishlistDataFromLocalStorage = () => {
    const  wishlistData = localStorage.getItem('Wishlist')
    return wishlistData ? JSON.parse(wishlistData) : [];
}

const Wish_Reducer =(state = getWishlistDataFromLocalStorage(), action) => {
    switch(action.type){
        case ADD_TO_WISHLIST:
            // console.warn('addToCartReducer Called', action);
            // const updatedWishlistAdd = [action.data ,...state];
            // localStorage.setItem['wishlist',JSON.stringify(updatedWishlistAdd)]
            // return updatedWishlistAdd;

            const existingProduct = state.findIndex(item => item.id === action.data.id)
            let updateWishlistData;

            if(existingProduct >= 0){
                updateWishlistData= state.map((item) => item.id === action.data.id ? {...item , quantity:item.quantity += 1} : item)
            } else {
                updateWishlistData = [{...action.data , quantity:1} , ...state]
            }

            return updateWishlistData;

        // case REMOVE_TO_WISHLIST:
        //     console.warn('removeToWishlistReducer Called', action);
        //     const updatedWishlistRmove = state.filter(item => item.id !== action.data)
        //     localStorage.setItem('cart' ,JSON.stringify(updatedWishlistRmove))
        //     return updatedWishlistRmove
        
        // case EMPTY_WISHLIST:
        //     console.warn('emptyWishlistReducer Called',action);
        //     localStorage.removeItem('cart')
        //     return []
        
        default: return state
    }
}

export default Wish_Reducer
