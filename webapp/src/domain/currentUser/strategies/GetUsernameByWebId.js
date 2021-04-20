// Persistence dependences
import PersistenceFactory from '../../../persistence/PersistenceFactory';

class GetUsernameByWebId {

    constructor(webId) {
        this.webId = webId;
    }

    async execute() {
        return await PersistenceFactory.forUser().getUsername(this.webId);
    }
}

export default GetUsernameByWebId;