import type { LatLngExpression } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css'
import pinMarker from '../../assets/locationPin.svg';
import { Icon } from 'leaflet'

const positionGreece: LatLngExpression = [39.156140, 20.982425];
const positionUSA: LatLngExpression = [44.047620, -123.102010];
const positionSouthAfrica : LatLngExpression = [-33.987939, 18.540089];
const myIcon = new Icon({
 iconUrl: pinMarker,
 iconSize: [32,32]
})

// DUMMY DATA

const CompaniesRevenueMap = () => {
  return (
    
        <MapContainer center={positionGreece}  zoom={13} scrollWheelZoom={true}  style={{ height: 536 }} >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* we added myIcon because the marker icon 
            will be displayed when using docker */}
        <Marker position={positionGreece} icon={myIcon}>
          <Popup>
              Greece <br/> Revenue: 1.000.000€
          </Popup>
        </Marker>

        <Marker position={positionUSA} icon={myIcon}>
          <Popup>
              USA <br/> Revenue: 2.000.000€
          </Popup>
        </Marker>

        <Marker position={positionSouthAfrica} icon={myIcon}>
          <Popup>
              South Africa <br/> Revenue: 500.000€
          </Popup>
        </Marker>

    </MapContainer>
 
  );
};

export default CompaniesRevenueMap;