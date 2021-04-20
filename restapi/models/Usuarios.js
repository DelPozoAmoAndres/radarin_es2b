const { Schema, model } = require('mongoose');

const UsuariosSchema = new Schema ({
    nombreUsuario: String,
    webid : {
        type: String,
        unique: true
    },
    coordinates : String,
    estadoCuenta : String
});

module.exports = model('Usuarios',UsuariosSchema);