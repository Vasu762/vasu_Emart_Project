import { combineReducers } from '@reduxjs/toolkit';
import reducer from './Redux/Reducer';
// import productReducer from './ProdutRedux/ProductReducer';
import ProductReducer from './ProductRedux/Product_Reducer';

const RootReducer = combineReducers({
   reducer,
   ProductReducer
})

export default RootReducer
