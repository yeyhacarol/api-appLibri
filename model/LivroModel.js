/* import do sequelize */
const Sequelize = require('sequelize')

/* import da coenxão com banco de dados */
const connection = require('../database/database')

/* representação do modelo de dados tbl_livro. É requerido os seguintes parâmetros:
* nome da tabela
* objeto json contendo:
    * nome do campo (objeto json)
        * tipos de dado
        * regras do campo
*/

const LivroModel = connection.define(
    'tbl_livro',
    {
        cod_livro: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        descricao: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        imagem: {
            type: Sequelize.STRING(500),
            allowNull: true
        }
    }
)

/* LivroModel.sync({force: true}) */

module.exports = LivroModel