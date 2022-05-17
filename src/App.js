import './App.css';
import {NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} from './keys';
import Map from './Components/Map';

import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  if(!isLoaded) return <div>Loading...</div>

  return (<Map />);
}

export default App;
