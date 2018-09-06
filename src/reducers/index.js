import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books";
import  FoodsReducer from "./reducer_food";

const rootReducer = combineReducers({
  books: BooksReducer,
    foods: FoodsReducer
});

export default rootReducer;
