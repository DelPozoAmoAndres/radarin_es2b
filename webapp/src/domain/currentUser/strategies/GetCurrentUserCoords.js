class GetCurrentUserCoords {

    execute() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                localStorage.setItem("currentPosition", JSON.stringify({
                    "lat": parseFloat(position.coords.latitude),
                    "lng": parseFloat(position.coords.longitude)
                }))
            });
            return JSON.parse(localStorage.getItem("currentPosition"));
        }
        return null;
    }
}

export default GetCurrentUserCoords;