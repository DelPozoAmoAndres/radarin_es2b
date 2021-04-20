//REACT_APP_API_URI is an enviroment variable defined in the file .env.development or .env.production

// Devuelve el número de usuarios
export async function getNumeroUsuarios() {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuarios/count')
    return await response.json()
}

// Devuelve todos los usuarios
export async function getUsuarios() {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuarios',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            { })
    })
    return await response.json()
}

//Añadir usuario COMPROBAR
export async function addUsuario(webid) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuario/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webid': webid
            })
    })
    return await response.json()
}

//Bloquear cuenta de usuario COMPROBAR
export async function bloquearUsuario(webid) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuario/bloquear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webid': webid,
            })
    })
    return await response.json()
}

//Desbloquear cuenta de usuario COMPROBAR
export async function desbloquearUsuario(webid) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuario/desbloquear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webid': webid,
            })
    })
    return await response.json()
}

//Modificar nombre de usuario COMPROBAR
export async function modificarNombreUsuario(webid, nombreUsuario) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuario/modificar/nombre', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webid': webid,
                'nombreUsuario': nombreUsuario
            })
    })
    return await response.json()
}

//Modificar localización de usuario COMPROBAR
export async function modificarCoordenadas(webid, coordinates) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuario/modificar/coordinates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webid': webid,
                'coordinates': coordinates
            })
    })
    return await response.json()
}

//Obtener webid con nombre de usuario COMPROBAR
export async function getWebIdByUsername(nombreUsuario) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuario/nombreUsuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(
            {
                'nombreUsuario': nombreUsuario
            })
    })
    return await response.json()
}

//Obtener nombre de usuario con webid COMPROBAR
export async function getUsernameByWebId(webId) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuario/webId', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webId': webId
            })
    })
    return await response.json()
}

//Obtener usuario con webid COMPROBAR
export async function getUsuarioByWebId(webId) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webId': webId
            })
    })
    return await response.json()
}



//Añadir elemento a la tabla de peticiones COMPROBAR
export async function addFriendRequest(webidSolicitante, webidSolicitado) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/friendrequest/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webidSolicitante': webidSolicitante,
                'webidSolicitado': webidSolicitado
            })
    })
    return await response.json()
}

//Listar solicitudes pendientes COMPROBAR
export async function getSolicitudesPendientes(webidSolicitado) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/friendrequest/list/pendientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webidSolicitado': webidSolicitado
            })
    })
    return await response.json()
}

//Listar solicitudes completadas COMPROBAR
export async function getSolicitudesCompletadas(webidSolicitante) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/friendrequest/list/completadas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webidSolicitante': webidSolicitante
            })
    })
    return await response.json()
}

//Aceptar solicitud COMPROBAR
export async function aceptarSolicitud(webidSolicitante, webidSolicitado) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/friendrequest/aceptar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webidSolicitante': webidSolicitante,
                'webidSolicitado': webidSolicitado
            })
    })
    return await response.json()
}

//Eliminar solicitud COMPROBAR
export async function eliminarSolicitud(webidSolicitante, webidSolicitado) {
    const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint + '/friendrequest/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                'webidSolicitante': webidSolicitante,
                'webidSolicitado': webidSolicitado
            })
    })
    return await response.json()
}