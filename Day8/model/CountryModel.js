const fs = require('fs');
const pool = require('./dbConnection');
const {prepareTable} = require('./prepareTable');

class Country {

    constructor() {
        const data = fs.readFileSync('./model/data.json');
        this.data = JSON.parse(data);
    }

    showcountryList = async() => {
        const sql = 'SELECT * FROM country';
        let conn;
        try {
            conn = await pool.getConnection();
            const [country, metadata] = await conn.query(sql);
            return country;
        } catch(error){
            console.error(error);
        } finally {
            if(conn) {
                conn.release();
            }
        }
    }

    detailCountry = async(id) => {
        const sql = 'SELECT * FROM country WHERE id = ?;';
        let conn;
        try {
            conn = await pool.getConnection();
            const [detail, metadata] = await conn.query(sql, id);
            return detail[0];
        } catch(error) {
            console.error(error);
        } finally {
            if(conn){
                conn.release();
            }
        }
    }

    addcountry = async (data) => {
        const name = data.name
        const language = data.language
        const capital = data.capital
        let conn;
        try {
            conn = await pool.getConnection();
            
            // Insert
            const sqlI = 'INSERT INTO country(name, language, capital) values (?, ?, ?);';
            const data = [name, language, capital];
            const resultI = await conn.query(sqlI, data);
            
            // Select
            const sqlS = 'SELECT * FROM country WHERE id = ?;';
            const resultS = await conn.query(sqlS, resultI[0].insertId);
            return resultS[0];
        } catch(error) {
            console.error(error);
        } finally {
            if(conn) {
                conn.release();
            }
        }
    }

    updatecountry = async(data) => {
        const name = data.name;
        const language = data.language;
        const capital = data.capital;
        const id = data.id
        const sql = 'UPDATE country SET name = ?, language = ?, capital = ? WHERE id = ?;';
        let conn;
        try {
            conn = await pool.getConnection();
            await conn.query(sql, [name, language, capital, id]);
            return this.detailCountry(id);
        } catch (error){
            console.error(error);
        } finally {
            if(conn){
                conn.release();
            }
        }
    }

    deletecountry = async (id) => {
        const sql = 'DELETE FROM country WHERE id = ?;';
        let conn;
        try {
            conn = await pool.getConnection();
            const result = await conn.query(sql, [id]);
            return null;
        } catch(error){
            console.error(error);
        } finally {
            if (conn){
                conn.release();
            }
        }
    }

      // showcountryList() {
    //     if (this.data) {
    //         return this.data;
    //     }
    // }
    
    // detailCountry(id) {
    //     return new Promise((resolve, reject) => {
    //         for (var object of this.data) {
    //             if (object.id == id) {
    //                 resolve(object);
    //                 return;
    //             }
    //         }
    //         reject({ msg: _id + ' not found', code: 404 });
    //     });
    // }

    // addcountry(data) {
    //     return new Promise((resolve, reject) => {
    //         const idx = this.data[this.data.length - 1].id + 1;
    //         const newcountry = {
    //             id:idx,
    //             name:data.name,
    //             language:data.language,
    //             capital:data.capital
    //         }
    //         this.data.push(newcountry);
    //         resolve(newcountry);
    //     });
    // }

     // updatecountry(data){
    //     return new Promise((resolve, reject) => {
    //         for (var object of this.data) {
    //             if (object.id == data.id) {
    //                 object.name = data.name;
    //                 object.language = data.language;
    //                 object.capital = data.capital;
    //                 console.log(object);
    //                 resolve(object);
    //                 return;
    //             }
    //         }
    //         reject({ msg: data.name + 'Fail', code: 404 });
    //     });
    // }

    // deletecountry(id){
    //     return new Promise((resolve, reject) => {
    //         for (var object of this.data) {
    //             if (object.id == id) {
    //                 this.data.splice(object.id,1);
    //                 resolve(object.id," Deleted");
    //                 return;
    //             }
    //         }
    //         reject({ msg: id + 'Fail', code: 404 });
    //     });
    // }

}
module.exports = new Country();

    