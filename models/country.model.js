// const fs = require('fs');
const Sequelize = require('sequelize');

class Country extends Sequelize.Model { 
    static init(sequelize) {
        return super.init({
            _id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: { type: Sequelize.STRING },
            language: { type: Sequelize.STRING },
            capital: { type: Sequelize.STRING },
        }, {
            charset: 'utf8', 
            tableName: 'countrys', 
            timestamps: false,
            freezeTableName: true,
            sequelize,
        });
    }
}

module.exports = Country;



