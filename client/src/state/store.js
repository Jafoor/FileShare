
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { NewPostReducer } from './Post';

const rootReducer = combineReducers({
    newPost: NewPostReducer
});

export const store = configureStore({
  reducer: {rootReducer},
})

export default store;