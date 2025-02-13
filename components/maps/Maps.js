// google maps component
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 41.8781,
  lng: -87.6298,
};

export default function SimpleMap() {
  return (
    <div className="container-fluid mt-5">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
