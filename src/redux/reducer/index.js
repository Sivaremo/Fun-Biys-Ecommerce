// rootReducer.js
import { combineReducers } from "redux";
import handlecart from "./handlecart";

const rootReducer = combineReducers({
  cart: handlecart,
});

export default rootReducer;
