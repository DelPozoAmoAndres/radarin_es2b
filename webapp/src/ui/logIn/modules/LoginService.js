import FileClient from "solid-file-client";
import auth, { Session,logout, login, getDefaultSession} from "@inrupt/solid-client-authn-browser";
import { getSolidDataset, saveSolidDatasetAt } from "@inrupt/solid-client";
async function Login(provider, webId) {
    const size = String(webId).length;
    if (size > 0) {
        //alert("Valido " + webId);
        provider = getProvider(webId);
        await LoginWithProvider(provider).then( ()=>
            auth.login(provider));
    }
    else if (size === parseInt(0)) {
        //alert("WebId vacio " + webId);
        await LoginWithProvider(provider).then( ()=> auth.login(provider));

    }
    else {
        alert("WebID invalido: " + webId);
    }
   
    
}
//comprueba que existe ese webId en los diferentes pods
async function existWebId(webId) {
    try {
        const fc = new FileClient(auth);
        let op = async (client) => await client.itemExists(webId);
        return await op(fc);
    }
    catch (e) {
        console.log(e)
        return false;
    }
}
//obtiene el proveedor a partir de un webId
function getProvider(webId) {
    if (webId.includes("profile")) {
        const webIdParts = webId.split("/");
        const providerParts = webIdParts[2].split(".");
        const provider = "https://m." + providerParts[1] + "." + providerParts[2];
        alert(provider);
        return provider;
    }
    else{
        alert("WebID invalido: "+webId)
    }
    return webId
}
//te logea pro proveedor
async function LoginWithProvider(provider) {

    var not = new Notification("Bienvenido!!"); //mostramos un mensaje de bienvenida 
    setTimeout(not.close, 3000);
    const session= new Session()
    await session.login({
            oidcIssuer: provider,
            redirectUrl: window.location.href
    })

}
//permite registrarte en el proveedor escogido
const Register = async (provider) => {
    
}

const Logout = async () => {
    logout({ returnTo: window.location.origin });
}

export { Login, Register, Logout }