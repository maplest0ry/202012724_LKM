const fs = require('fs');

const Sequelize = require('Sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', { 
     dialect: 'mysql', host: '127.0.0.1'
});

class Countrys extends Sequelize.Model { }
Countrys.init({
        id: { 
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING,
        language: Sequelize.STRING,
        capital: Sequelize.STRING
    }, {tableName:'country', sequelize, timestamps: false});


class Country {

    constructor() {
        const data = fs.readFileSync('./model/data.json');
        this.countrys = JSON.parse(data);
    }

    async oneDataInsert(country) {
        try {
            let countryData = await Countrys.create({ 
                            name : country.name, 
                            language : country.platform, 
                            capital : country.capital
                        }, {logging:false});
            const newData = countryData.dataValues;

            return newData;
        } catch (error) {
            console.error(error);
        }
    }

    async allDataInsert() {
        const data = fs.readFileSync('./model/data.json');
        const countryData = JSON.parse(data);
        for (var country of countryData ) {
            await this.oneDataInsert(country);
        }
    }

    getCountryList = async() => {
        let returnValue;
        await Countrys.findAll({})
        .then( results => {
            returnValue = results;
        })
        .catch( error => {
            console.error('Error :', error);
        });
        return returnValue;
    }

    addCountry = async(name, language, capital) => {
        const country = {name, language, capital};
        try {
            const returnValue = await this.oneDataInsert(country);
            console.log(returnValue);
            return returnValue;
        } catch (error) {
            console.error(error);
        }
    }

    getCountryDetail = async(Id) => {
        try {
            const ret = await Countrys.findAll({
                where:{id:Id}
            });

            if ( ret ) {
                return ret[0];
            }
            else {
                console.log('데이터 없음');
            }
        }
        catch (error) {
            console.log('Error :', error);
        }
    }

    deleteCountry = async(Id) => {
        try {
            await Countrys.destroy({where: {id:Id}});
        } catch (error) {
            console.error(error);  
        }
    }

    updateCountry = async(Id, name, language, capital) => {
        try {
            let country = await this.getCountryDetail(Id);
            country.dataValues.name = !name ? country.name : name;
            country.dataValues.language = !language ? country.language : language;
            country.dataValues.capital = !capital ? country.capital : capital;

            let ret = await country.save();
            return ret;
        } catch (error) {
            console.error(error);  
        }
    }
}
module.exports = new Country();

    