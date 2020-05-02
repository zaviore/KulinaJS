import { createStore, combineReducers, applyMiddleware } from "redux";
import STATES from "../_redux/state";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

export { logger, promise };

// Global state
const rootReducers = combineReducers({
  STATES,
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
