
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { NewPostReducer, GetPostsReducer, GetPostReducer } from './Post';

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const rootReducer = combineReducers({
    newPost: NewPostReducer,
    posts: GetPostsReducer,
    post: GetPostReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
})

export default store;