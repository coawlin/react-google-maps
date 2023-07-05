import { combineReducers } from "redux";
import autocompleteReducer, { AutocompleteState } from "./autocompleteReducer";

export type IRootState = {
    autocomplete: AutocompleteState
}

// currently has only one, open for extension
const rootReducer = combineReducers({
    autocomplete: autocompleteReducer
});

export default rootReducer;