import { useState, useCallback, useEffect } from "react";
import { fetchPlacesPredictions } from "../actions";
import { useDispatch } from "react-redux";

export default function useAutocomplete() {
    const dispatch = useDispatch();
    const [ autoCompleteService, setAutoCompleteService ] = useState<google.maps.places.AutocompleteService | null>(null);
    const fetchPredictions = useCallback((payload: Promise<google.maps.places.AutocompleteResponse>) => dispatch(fetchPlacesPredictions(payload)), [dispatch]);

    useEffect(() => {
        const service = new google.maps.places.AutocompleteService();
        setAutoCompleteService(service);
    }, []);

    return {
        fetchPredictions: (searchText: string) =>
            fetchPredictions((autoCompleteService as google.maps.places.AutocompleteService).getPlacePredictions({ input: searchText }))
    };
}