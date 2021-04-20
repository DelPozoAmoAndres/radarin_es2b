// mongodb://admin:ADMSIS123@radarin-es2b-shard-00-00.oh0ak.mongodb.net:27017,radarin-es2b-shard-00-01.oh0ak.mongodb.net:27017,radarin-es2b-shard-00-02.oh0ak.mongodb.net:27017/radarin-es2b?ssl=true&replicaSet=atlas-6o8ba3-shard-0&authSource=admin&retryWrites=true&w=majority

// Dependences from: ~/persistence
import UserGateway from "./user/UserGateway";
// import FriendRequestGateway from "./friendRequest/FriendRequestGateway";

class GatewaysFactory {
    static forUser() {
        return new UserGateway();
    }

    static forFriendRequest() {
        // return new FriendRequestGateway();
        return null;
    }
}

export default GatewaysFactory;