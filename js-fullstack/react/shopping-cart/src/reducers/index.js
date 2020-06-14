// 商品，购物车商品 购物车状态
import { combineReducers } from 'redux';
import cart from './cart';
import products from './products';

export default combineReducers({
  cart,
  products
})