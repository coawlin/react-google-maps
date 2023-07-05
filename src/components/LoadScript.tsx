import { Loader } from "@googlemaps/js-api-loader";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { GOOGLE_MAPS_API_KEY } from "../mapApiKey";

export const defaultLoadScriptProps = {
    id: "maps-libraries-loader",
    version: "weekly",
};

export default function LoadScript({ children }: PropsWithChildren) {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const loader = useMemo(() => {
        return new Loader({
            apiKey: GOOGLE_MAPS_API_KEY,
            version: "weekly",
            libraries: [ "maps", "places" ]
        });
    }, [ ]);

    useEffect(() => {
        if (isLoaded) return;
        loader.load().then(() => {
            setIsLoaded(true);
        });
    }, [isLoaded, loader]);

    return (
        isLoaded ? <>{children}</> : null
    );
}