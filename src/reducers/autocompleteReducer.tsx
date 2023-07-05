import { AUTOCOMPLETE_ACTIONS } from "../actions";

export type AutocompleteState = {
    options: google.maps.places.AutocompletePrediction[];
    selectedOption: google.maps.places.AutocompletePrediction | null;
}

const initialState: AutocompleteState = {
    options: [],
    selectedOption: null
};

const autocompleteReducer = (state = initialState, action: any) => {
    switch(action.type) {
    case AUTOCOMPLETE_ACTIONS.FETCH_OPTIONS_PENDING:
        return { ...state };
    case AUTOCOMPLETE_ACTIONS.FETCH_OPTIONS_FULFILLED:
        return {
            ...state,
            options: [...action.payload.predictions]
        };
    case AUTOCOMPLETE_ACTIONS.FETCH_OPTIONS_REJECTED:
        return {
            ...state,
            options: null
        };
    case AUTOCOMPLETE_ACTIONS.CLEAR_OPTIONS:
        return {
            ...state,
            options: []
        };
    case AUTOCOMPLETE_ACTIONS.UPDATE_SELECTED_OPTION:
        return {
            ...state,
            selectedOption: {
                ...action.payload
            }
        };
    default:
        return {...state};
    }
};

export default autocompleteReducer;