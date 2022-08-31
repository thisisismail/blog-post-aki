import { combineReducers } from "redux";
import postsReducer from "./postsReducer.js";

const allReducers = combineReducers({
  postsReducer: postsReducer,
});

export default allReducers;
