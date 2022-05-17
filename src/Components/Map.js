import {useState, useMemo, useCallback, useRef} from "react";
import '../styles/map.css';
import { MAP_ID } from '../keys'
import FireMarker from "./FireMarker";


import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer,
} from "@react-google-maps/api"

export default function Map (){
    const mapRef = useRef();
    const [fire, setFire] = useState();
    const centerCoordinates = useMemo(() => ({lat: 34.0344088, lng: -117.7805787}), []);

    //34.0344088,-117.7805787,11z
    const mapOptions = useMemo(() => ({
        mapId: MAP_ID, //refers to the stylized map that is customized in Google Maps Platform
        clickableIcons: false,
        streetViewControl: false,
    }), []);

    const onLoad = useCallback(map => (mapRef.current = map), []);

    return(
        <div className="container">
            <div className="controls">
                <h1>testing</h1>
            </div>

            <GoogleMap 
                mapContainerClassName="map-container"
                zoom = {10} 
                center = {centerCoordinates}
                mapIds = {"8dcee393ef148c7f"}
                options = {mapOptions}
                onLoad = {onLoad}>
                    {/* <FireMarker position={centerCoordinates}/> */}
                    {<Marker position={centerCoordinates}/>}
                    <FireMarker 
                        // lat={centerCoordinates.lat} 
                        // lng={centerCoordinates.lng}
                        position={centerCoordinates}
                        />

            </GoogleMap>
        </div>
 
    );

}
