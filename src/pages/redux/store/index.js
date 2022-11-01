import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { authProcess } from "../reducers/authReducer";
import { reducer } from "../reducers/countReducer";
import { colorReducer } from "../reducers/colorReducer";
import thunk from "redux-thunk";
// export
const allReducers = combineReducers({
  count: reducer,
  color: colorReducer,
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

// membuat store --------------------

// export const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
