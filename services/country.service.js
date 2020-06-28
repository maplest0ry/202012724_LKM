const connect = require('../config');
const Country = require('../models/country.model').init(connect);


class CountryService {
    constructor() {
        try {
            this.prepareModel();
        } catch (error) {
            console.error(error);
        }
    }

    async prepareModel() {
        try {
            await Country.sync({force:false});
        }
        catch(err) {
            console.log('Country.sync ERROR: ', err);
        }
    }
    
    async getCountryList() {
        try {
            let result = [];
            let ret = await Country.findAll({});
            for(let item of ret) {
                result.push(item.dataValues);
            }
            return result;
        }
        catch (err) {
            console.log('ERROR: ', err);
        } 
    }
    
    async getCountryDetail(_id) {
        try {
            const ret = await Country.findByPk(_id);
            if (ret) {
                return ret.dataValues;
            } else {
                console.log('NO DATA');
            }
        }
        catch (err) {
            console.log('ERROR: ', err);
        }
    }
    
    async addCountry(data) {
        try {
            console.log('START INSERT...');
            const ret = await Country.create({
                name: data.name,
                language: data.language,
                capital: data.capital
            }, {log: false});
            const newData = ret.dataValues;
            return newData;
        }
        catch (err) {
            console.log('ERROR: ', err);
        }
    }
    
    async updateCountry(data){
        try {
            console.log('START UPDATE...');
            const ret = await Country.update(
                {   name: data.name,
                    language: data.language,
                    capital: data.capital },
                { where: {
                    _id: data._id 
                }}
            );
    
            if(ret) {
                return ret;
            } else {
                console.log('CANNOT UPDATE');
            }
        }
        catch (err) {
            console.log('ERROR: ', err);
        }
    }
    
    async deleteCountry(_id){
        try {
            console.log('START DELETE...');
            await Country.destroy({
                where: {
                    _id: _id
                }
            })
            .then(res => {
                return res;
            })
            .catch(err => {
                console.error('DELETE ERROR: ', err);
            })
        }
        catch (err) {
            console.log('ERROR: ', err);
        }
    }
}


module.exports = new CountryService();