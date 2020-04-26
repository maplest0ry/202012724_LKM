const fs = require('fs');
class Country {
    constructor() {
        const data = fs.readFileSync('./model/data.json');
        this.data = JSON.parse(data);
    }

    showcountryList() {
        if (this.data) {
            return this.data;
        }
    }
    detailCountry(id) {
        return new Promise((resolve, reject) => {
            for (var object of this.data) {
                if (object.id == id) {
                    resolve(object);
                    return;
                }
            }
            reject({ msg: _id + ' not found', code: 404 });
        });
    }

    addcountry(data) {
        return new Promise((resolve, reject) => {
            const idx = this.data[this.data.length - 1].id + 1;
            const newcountry = {
                id:idx,
                name:data.name,
                language:data.language,
                capital:data.capital
            }
            this.data.push(newcountry);
            resolve(newcountry);
        });
    }

    updatecountry(data){
        return new Promise((resolve, reject) => {
            for (var object of this.data) {
                if (object.id == data.id) {
                    object.name = data.name;
                    object.language = data.language;
                    object.capital = data.capital;
                    console.log(object);
                    resolve(object);
                    return;
                }
            }
            reject({ msg: data.name + 'Fail', code: 404 });
        });
    }

    deletecountry(id){
        return new Promise((resolve, reject) => {
            for (var object of this.data) {
                if (object.id == id) {
                    this.data.splice(object.id,1);
                    resolve(object.id," Deleted");
                    return;
                }
            }
            reject({ msg: id + 'Fail', code: 404 });
        });
    }

}
module.exports = new Country();

    