const Sequelize = require('sequelize');

const sequelize = new Sequelize("guilherme", "root", "g22v07c96", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão realizada com sucesso");
}).catch(function(){
    console.log("erro de conexão");
})

module.exports = sequelize;