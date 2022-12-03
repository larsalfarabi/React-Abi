import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { authProcess } from "../reducers/authReducer";
import thunk from "redux-thunk";

// export
const allReducers = combineReducers({
  authProcess: authProcess,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
