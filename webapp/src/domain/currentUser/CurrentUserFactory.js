import GetCurrentUserCoords from './strategies/GetCurrentUserCoords';
import GetUsernameByWebId from './strategies/GetUsernameByWebId';
import UpdateCurrentUserCoordinates from './strategies/UpdateCurrentUserCoordinates';

class CurrentUserFactory {
    forGetCurrentUserCoords() {
        return (new GetCurrentUserCoords()).execute();
    }
    forGetUsernameByWebId(webId) {
        return (new GetUsernameByWebId(webId)).execute();
    }
    forUpdateCurrentUserCoordinates(webId, coordinates) {
        return (new UpdateCurrentUserCoordinates(webId, coordinates)).execute();
    }
}

export default CurrentUserFactory;