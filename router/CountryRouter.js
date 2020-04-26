const express = require('express');
const router = express.Router();
const countryModel = require('../model/CountryModel');

router.get('/country', showcountryList);
router.get('/country/:id',showCountryDetail);
router.post('/country', addcountry);
router.put('/country', updatecountry);
router.delete('/country/:id', deletecountry);


module.exports = router;

function showcountryList(req, res) {
    const countryList = countryModel.showcountryList();
    const result = { data:countryList, count:countryList.legth };
    res.send(result);
}

async function showCountryDetail(req, res) {
    try {
        const id = req.params.id;
        console.log('country: ', id);
        const info = await countryModel.detailCountry(id);
        res.send(info);
    } 
    catch (error) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:error.msg});
    }
}

async function addcountry(req, res) {
    const data = req.body
    try {
        const result = await countryModel.addcountry(data);
        res.send({msg:'success', data:result});
    } catch (error) {
        res.status(500).send(error.msg);
    }
}

async function updatecountry(req, res) {
    
    const data = req.body;

    const name = data.name;
    const language = data.language;
    const capital = data.capital;

    if ( !name || !language || !capital) {
        res.status(400).send({error:'Fail'});
        return;
    }

    try {
        const result = await countryModel.updatecountry(data);
        res.send({msg:'Updated country' + data.name, data:result});
    }
    catch ( error ) {
        console.error(error);
        res.status(500).send({error:'Fail'});
    }
}


async function deletecountry(req, res) {

    try {
        const id = req.params.id;
        console.log('Deleted country : ', id);
        const result = await countryModel.deletecountry(id);
        res.send({msg:'Deleted country', data:result});
    }
    catch ( error ) {
        res.status(400).send({error:'Fail'});
    }
}