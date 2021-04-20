// REACT_APP_API_URI is an enviroment variable defined in the file .env.development or .env.production

class UserGateway {
    async getUsername(webId) {
        const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api';
        try {
            const response = await fetch(apiEndPoint + '/usuario/webId', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'webId': webId })
            });
            try {
                const json = await response.json();
                return json.nombreUsuario;
            } catch (error) {
                console.log(error);
            }
        } catch (error_1) {
            console.log(error_1);
        }
    }
    async updateCoords(webId, coordinates) {
        const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api';
        try {
            const response = await fetch(apiEndPoint + '/usuario/modificar/coordinates', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'webid': webId, 'coordinates': coordinates })
            });
            return response.ok;
        } catch (error) {
            console.log(error);
        }
    }
}

export default UserGateway;