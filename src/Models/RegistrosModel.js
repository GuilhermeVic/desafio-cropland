const Sequelize = require('sequelize');
const db = require('./db');

const Registro = db.define('Registros', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    vencimento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valor: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

// Registro.sync();

module.exports = Registro;