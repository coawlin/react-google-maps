import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../reducers/reducer";
import { ThemeContext } from "../context/context";
import { styles as mapStyles } from "../constants/styledMap";

const DEFAULT_ZOOM = 13;
const DEFAULT_POSITION = {
    lat: 1.3510675257057285,
    lng: 103.81094511219997
};

export default function Map() {
    const [ map, setMap ] = useState<google.maps.Map | null>(null);
    const [ marker, setMarker ] = useState<google.maps.Marker | null>(null);
    const [ placesService, setPlacesService ] = useState<google.maps.places.PlacesService | null>(null);
    const selectedOption = useSelector((state: IRootState) => state.autocomplete.selectedOption);
    const mapRef = useRef<HTMLDivElement | null>(null);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
            center: DEFAULT_POSITION,
            zoom: DEFAULT_ZOOM
        });
        const placesService = new google.maps.places.PlacesService(map);
        setPlacesService(placesService);
        setMap(map);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(selectedOption) {
            placesService?.getDetails({placeId: selectedOption?.place_id as string}, (place) => {
                const lat = place?.geometry?.location?.lat() as number;
                const lng = place?.geometry?.location?.lng() as number;
                map?.setCenter({ lat, lng });
                marker?.setMap(null);
                const newMarker = new google.maps.Marker({
                    position: { lat, lng },
                    map
                });
                setMarker(newMarker);
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOption]);

    useEffect(() => {
        const styles = theme === "light" ? mapStyles.default : mapStyles.night;
        map?.setOptions({ styles });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);
    return <div ref={mapRef} style={{ height: "80%", width: "80%", marginLeft: "10%" }}></div>;
}