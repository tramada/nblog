var mysql = require('mysql');

var connMysql = function(){
    console.log('Conexão com BD criada');
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USUARIO,
        password: process.env.DB_SENHA,
        database: process.env.DB_NOME
    });
   /*  return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root123  ',
        database: process.env.DB_NOME
    }); */
}

module.exports = function() {
   console.log('O autoload carregou o módulo de conexão com o BD');
   return connMysql;
};