import { createStore, combineReducers } from "redux";
import deck from "./store/reducer";

const rootReducer = combineReducers({ deck });

export default function configureStore() {
  return createStore(rootReducer);
}
