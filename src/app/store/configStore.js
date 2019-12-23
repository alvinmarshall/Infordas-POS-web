import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

export const configureStore = preloadedState => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancer = [middlewareEnhancer];
  const composedEnhancer = compose(...storeEnhancer);
  const store = createStore(rootReducer, preloadedState, composedEnhancer);
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducers/rootReducer.js", () => {
        const newReducer = require("../reducers/rootReducer").default;
        store.replaceReducer(newReducer);
      });
    }
  }
  return store;
};
