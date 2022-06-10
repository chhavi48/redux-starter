import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { feedReducer } from "./feed/feed.reducer";
import { authReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// reducers are not ready
