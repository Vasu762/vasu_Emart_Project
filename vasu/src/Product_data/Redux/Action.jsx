import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART ,ADD_TO_WISHLIST ,REMOVE_TO_WISHLIST ,EMPTY_WISHLIST} from './Constant'


// addTocart
export const addTocart = (data) => {
  console.warn("add to cart called", data);
  return {
    type: ADD_TO_CART,
    data
  }
}


export const removeTocart = (data) => {
  console.warn("remove to cart called", data);
  return {
    type: REMOVE_TO_CART,
    data
  }
}


export const Emptycart = () => {
  console.warn("empty cart called");
  return {
    type: EMPTY_CART,

  }
}




// Wishlist

export const addToWishlist = (data) => {
  console.warn("add to cart called", data);
  return {
    type: ADD_TO_WISHLIST,
    data
  }
}


export const removeToWishlist = (data) => {
  console.warn("remove to cart called", data);
  return {
    type: REMOVE_TO_WISHLIST,
    data
  }
}


export const EmptyWishlist = () => {
  console.warn("empty cart called");
  return {
    type: EMPTY_WISHLIST,

  }
}



