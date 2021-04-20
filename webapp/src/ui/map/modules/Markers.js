// External dependences
import { Marker, Popup } from 'react-leaflet';
import { divIcon,latLng, CRS  } from 'leaflet';


const blue = '#004B87';
const yellow = '#FFCD00';

function iconByColourCode(colourCode) {
    let style = `background-color: ${colourCode};
            width: 3rem;
            height: 3rem;
            display: block;
            left: -1.5rem;
            top: -1.5rem;
            position: relative;
            border-radius: 3rem 3rem 0;
            transform: rotate(45deg);
            border: 1px solid #FFFFFF`;
    return divIcon({
        className: "my-custom-pin",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style="${style}" />`
    })
};

function getMarker(user, colour, key) {
    if (colour == null)
        colour = '#FFFFFF';
    return (
        <Marker key={key} ref={(ref) => { if (ref && ref.leafletElement) { ref.leafletElement.openPopup(); } }} position={user.getLatLng()} icon={iconByColourCode(colour)} >
            <Popup><pre>{user.toString()}</pre></Popup>
        </Marker>
    );
}

export function getMarkers(users) {
    let usersMarkers = [];
    let markerKey = parseInt(0);
    let colour = yellow;
    users.forEach((value, index, array) => {
        markerKey = parseInt(markerKey + 1);
        usersMarkers.push(getMarker(value, colour, markerKey));
        colour = blue;
    });
    return usersMarkers;
}

export function calcularDistancia(lat1, lng1, lat2, lng2) {
    return CRS.Earth.distance(latLng(lat1, lng1), latLng(lat2, lng2));
}