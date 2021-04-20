import { latLng } from 'leaflet';

/**
 * User Data Transfer Object (DTO)
 * 
 * Initially, a POJO (Plain Old Java Object): https://en.wikipedia.org/wiki/Plain_old_Java_object
 * Also includes several functionalities, as "getLatLng()" for "MapView"
 */
export class UserDTO {

    constructor(props) {
        this.username = props.username;
        this.latitude = props.latitude;
        this.longitude = props.longitude;
    }

    getCoordinates() {
        return { latitude: this.latitude, longitude: this.longitude };
    }

    getLatLng() {
        if (this.latitude == null || this.longitude == null)
            return latLng(0.0, 0.0);
        return latLng(this.latitude, this.longitude);
    }

    toString() {
        let value = "Nombre de usuario: " + this.username
        if (this.latitude != null && this.longitude != null)
            value += "\n\tLatitude: " + parseFloat(this.latitude)//.toFixed(2)
                + "\n\tLongitude: " + parseFloat(this.longitude)//.toFixed(2)
                ;
        return value;
    }

}