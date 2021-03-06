import {useState, useMemo, useCallback, useRef} from "react";
import '../styles/map.css';
import { MAP_ID } from '../keys'
import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/fire-alert'


const FireMarker = ({lat, lng, onClick}) => {
    return(
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon"/>
        </div>
    )
}

export default FireMarker;