const express = require("express")
const router = express.Router()

//Modelos
const Usuarios = require ("./models/Usuarios")
const FriendRequest = require("./models/FriendRequest")

// Devuelve el número de usuarios
router.get("/usuarios/count", async (req, res) => {
    const users = await Usuarios.find({}).sort('-_id') //Inverse order
    res.send(users.length);
})

// Devuelve todos los usuarios
router.post("/usuarios", async (req, res) => {
    const users = await Usuarios.find({}).sort('-_id')
    res.send(users);
})

//Bloquear a un usuario COMPROBAR
router.post("/usuario/bloquear", async (req, res) => {
    let webid = req.body.webid;
    let usuario = await Usuarios.findOne({ webid: webid })
    if (usuario){
        let usuario = await Usuarios.findOneAndUpdate(
            {
                webid: webid
            },
            {
                estadoCuenta: "BLOQUEADA",
            },
            { returnOriginal: false })
        if (usuario)
            res.send({ result:"El usuario ha sido bloqueado"})
        else
            res.send({ error:"Error: Ha habido un error al bloquear al usuario"})
    }     
    else {
        res.send({ error: "Error: Este usuario no existe" })
    }
})

//Desbloquear a un usuario COMPROBAR
router.post("/usuario/desbloquear", async (req, res) => {
    let webid = req.body.webid;
    let usuario = await Usuarios.findOne({ webid: webid })
    if (usuario){
        let usuario = await Usuarios.findOneAndUpdate(
            {
                webid: webid
            },
            {
                estadoCuenta: "ACTIVA",
            },
            { returnOriginal: false })
        if (usuario)
            res.send({ result:"El usuario ha sido desbloqueado"})
        else
            res.send({ error:"Error: Ha habido un error al desbloquear al usuario"})
    }     
    else {
        res.send({ error: "Error: Este usuario no existe" })
    }
})

//Añadir usuario COMPROBAR
router.post("/usuario/add", async (req, res) => {
    let webid = req.body.webid;
    let usuario = await Usuarios.findOne({ webid: webid })
    const users = await Usuarios.find({})
    if (usuario)
        res.send({ error: "Error: Este usuario ya ha sido añadido" })
    else {
        usuario = new Usuarios({
            nombreUsuario: users.length+1,
            webid: webid,
            coordinates: "",
            estadoCuenta: "ACTIVA"
        })
        await usuario.save()
        res.send(usuario)
    }
})

//Modificar nombre de usuario COMPROBAR
router.post("/usuario/modificar/nombre", async (req, res) => {
    let webid = req.body.webid;
    let nombreUsuario = req.body.nombreUsuario;
    let usuario = await Usuarios.findOne({ nombreUsuario: nombreUsuario })
    if (usuario)
        res.send({ error: "Error: Este nombre de usuario ya existe" })
    else {
        let usuario = await Usuarios.findOneAndUpdate(
            {
                webid: webid
            },
            {

                nombreUsuario: nombreUsuario,
            },
            { returnOriginal: false })
        if (usuario)
            res.send({ result:"El nombre ha sido cambiado con éxito"})
        else
            res.send({ error:"Error: Ha habido un error al cambiar el nombre"})
    }
})

//Modificar localización de usuario COMPROBAR
router.post("/usuario/modificar/coordinates", async (req, res) => {
    let webid = req.body.webid;
    let coordinates = req.body.coordinates;
    let usuario = await Usuarios.findOne({ webid: webid })
    if (usuario) {
        let usuario = await Usuarios.findOneAndUpdate(
            {
                webid: webid
            },
            {
                coordinates: coordinates
            })
        if (usuario)
            res.send({result: "La localización ha sido cambiado con éxito"})
        else
            res.send({error: "Error: Ha habido un error al cambiar la localización"})
    }
    else
        res.send({error: "Error: Ha habido un error"})
})

//Obtener webid con nombre de usuario COMPROBAR
router.post("/usuario/nombreUsuario", async (req, res) => {
    let nombreUsuario = req.body.nombreUsuario;
    let usuario = await Usuarios.findOne({ nombreUsuario: nombreUsuario })
    if (usuario)
        res.send(usuario)
    else {
        res.send({error: "Error: Usuario no encontrado"})
    }
})

//Obtener usuario con webid COMPROBAR
router.post("/usuario", async (req, res) => {
    let webid = req.body.webId;
    let usuario = await Usuarios.findOne({ webid: webid })
    if (usuario)
        res.send(usuario)
    else {
        res.send({error: "Error: Usuario no encontrado"})
    }
})


//Obtener nombre de usuario con webid COMPROBAR
router.post("/usuario/webId", async (req, res) => {
    let webId = req.body.webId;
    let usuario = await Usuarios.findOne({ webid: webId })
    if (usuario) {
        res.send(usuario)
    }
    else {
        res.send({error:"Error: Usuario no encontrado"})
    }
})

//Añadir elemento a la tabla de peticiones COMPROBAR
router.post("/friendrequest/add", async (req, res) => {
    let webidSolicitante = req.body.webidSolicitante;
    let webidSolicitado = req.body.webidSolicitado;
    let peticion = await FriendRequest.findOne(
        {
            webidSolicitante: webidSolicitante,
            webidSolicitado: webidSolicitado
        })
    if (peticion)
        res.send({ error: "Error: Esta petición ya ha sido añadida" })
    else {
        peticion = new FriendRequest({
            webidSolicitante: webidSolicitante,
            webidSolicitado: webidSolicitado,
            status: "PENDIENTE"
        })
        await peticion.save()
        res.send(peticion)
    }
})

//Listar solicitudes pendientes COMPROBAR
router.post("/friendrequest/list/pendientes", async (req, res) => {
    let webidSolicitado = req.body.webidSolicitado;
    let peticiones = await FriendRequest.find(
        {
            webidSolicitado: webidSolicitado,
            status: "PENDIENTE"
        })
    res.send(peticiones)
})

//Listar solicitudes completadas COMPROBAR
router.post("/friendrequest/list/completadas", async (req, res) => {
    let webidSolicitante = req.body.webidSolicitante;
    let peticiones = await FriendRequest.find(
        {
            webidSolicitante: webidSolicitante,
            status: "COMPLETADO"
        })
    res.send(peticiones)
})

//Aceptar solicitud COMPROBAR
router.post("/friendrequest/aceptar", async (req, res) => {
    let webidSolicitante = req.body.webidSolicitante;
    let webidSolicitado = req.body.webidSolicitado;
    let peticion = await FriendRequest.findOne(
        {
            webidSolicitante: webidSolicitante,
            webidSolicitado: webidSolicitado
        })
    if (peticion) {
        let peticion = await FriendRequest.findOneAndUpdate(
            {
                webidSolicitante: webidSolicitante,
                webidSolicitado: webidSolicitado
            },
            {
                "$set": {
                    status: "COMPLETADO",
                }
            })
        if (peticion)
            res.send({result: "La petición ha sido aceptada con éxito"})
        else
            res.send({error: "Ha habido un error al aceptar la petición"})
    }
    else
        res.send({error:"Ha habido un error"})
})

//Eliminar solicitud COMPROBAR
router.post("/friendrequest/delete", async (req, res) => {
    let webidSolicitante = req.body.webidSolicitante;
    let webidSolicitado = req.body.webidSolicitado;
    let peticion = await FriendRequest.findOneAndDelete(
        {
            webidSolicitante: webidSolicitante,
            webidSolicitado: webidSolicitado
        })

    if (peticion)
        res.send({result: "La petición " + peticion + " ha sido eliminada con éxito"})
    else {
        res.send({error: "Ha ocurrido un error"})
    }
})


module.exports = router