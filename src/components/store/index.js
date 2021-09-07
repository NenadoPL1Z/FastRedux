import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { custromerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//? Store - это объект кторый содержит несколько методов (получить сстояние / изенить состояние / подписаться на изменеие)

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: custromerReducer,
});

//? Вторым параметром можно передать как middleware, так и интсрумент разработчика
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
