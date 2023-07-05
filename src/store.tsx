import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducer";
import promise from "redux-promise-middleware";

export default configureStore({
    reducer: rootReducer,
    middleware: [ promise ]
});