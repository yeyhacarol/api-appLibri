/* import do módulo do sequelize */
const Sequelize = require("sequelize");

/* criando a instância do sequelize e conexão com o banco de dados. É requerido alguns parâmetros:
 * nome do database (string)
 * usuário do banco de dados (string)
 * senha do database (string)
 * objeto json para determinar as configurações do banco de dados:
 * local da instância do banco de dados (localhost nesse caso)
 * tipo do banco de dados (mysql)
 * definição do fuso horário do database
 */

const connection = new Sequelize("app_libri", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
