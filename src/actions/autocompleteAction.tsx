export const AUTOCOMPLETE_ACTIONS = {
    FETCH_OPTIONS: "FETCH_OPTIONS",
    FETCH_OPTIONS_PENDING: "FETCH_OPTIONS_PENDING",
    FETCH_OPTIONS_FULFILLED: "FETCH_OPTIONS_FULFILLED",
    FETCH_OPTIONS_REJECTED: "FETCH_OPTIONS_REJECTED",
    CLEAR_OPTIONS: "CLEAR_OPTIONS",
    UPDATE_SELECTED_OPTION: "UPDATE_SELECTED_OPTION"
};

export const fetchPlacesPredictions = (promise: Promise<google.maps.places.AutocompleteResponse>) => ({
    type: AUTOCOMPLETE_ACTIONS.FETCH_OPTIONS,
    payload: promise
});

export const clearOptions = () => ({
    type: AUTOCOMPLETE_ACTIONS.CLEAR_OPTIONS,
});

export const updateSelectedOption = (payload: google.maps.places.AutocompletePrediction) => ({
    type: AUTOCOMPLETE_ACTIONS.UPDATE_SELECTED_OPTION,
    payload
});