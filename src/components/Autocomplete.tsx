import { AutoComplete } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearOptions, updateSelectedOption } from "../actions";
import useAutocomplete from "../hooks/useAutocomplete";
import { IRootState } from "../reducers/reducer";

const Option = AutoComplete.Option;

export default function Autocomplete() {
    const options = useSelector((state: IRootState) => state.autocomplete.options);
    const dispatch = useDispatch();
    const updateSelected = useCallback((payload: google.maps.places.AutocompletePrediction) => dispatch(updateSelectedOption(payload)), [dispatch]);
    const dispatchClearOptions = useCallback(() => dispatch(clearOptions()), [dispatch]);
    const { fetchPredictions } = useAutocomplete();

    const onSelect = (_: string, option: any) => {
        updateSelected(option.detail);
    };

    const onSearch = async (searchText: string = "") => {
        if (searchText.trim()) {
            fetchPredictions(searchText);
        } else {
            dispatchClearOptions();
        }
    };

    return (
        <AutoComplete
            style={{ width: "30%", margin: "20px" }}
            placeholder="Search place"
            allowClear
            size="middle"
            onSelect={onSelect}
            onSearch={onSearch}>
            {options && options.map(option => {
                return (
                    <Option key={option.place_id} value={option.description} detail={option}>
                        {option.description}
                    </Option>
                );
            })}
        </AutoComplete>
    );
}