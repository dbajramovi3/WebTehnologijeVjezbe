const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    const Imenik = sequelize.define('Imenik', {
        ime: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prezime: {
            type: Sequelize.STRING,
            allowNull: false
        },
        adresa: {
            type: Sequelize.STRING,
            allowNull: false
        },
        brojTelefona: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: [/\d{3}\/\d{3}\-\d{3}/],
                    msg: "Nije pravilan format broja telefona"
                }
            }
        },
        datumDodavanja: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });

    return Imenik;
}
