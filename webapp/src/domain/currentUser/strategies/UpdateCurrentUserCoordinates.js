// Persistence dependences
import PersistenceFactory from '../../../persistence/PersistenceFactory';

class UpdateCurrentUserCoordinates {

    constructor(webId, coordinates) {
        this.webId = webId;
        this.coordinates = coordinates;
    }

    execute() {
        if (!this.isWebIdInvalid() || !(this.isUsernamePresent()))
            return false;
        return PersistenceFactory.forUser().updateCoords(this.webId, this.coordinates);
    }

    isWebIdInvalid() {
        return (this.webId != null);
    }

    isUsernamePresent() {
        let username = PersistenceFactory.forUser().getUsername(this.webId);
        return (username != null);
    }
}

export default UpdateCurrentUserCoordinates;