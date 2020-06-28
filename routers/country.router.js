const router = require('express').Router();
const Service = require('../services/country.service');


router.get('/countrys', showCountryList);
router.get('/countrys/add', addCountryView);
router.post('/countrys', addCountry);
router.get('/countrys/:_id', showCountryDetail);
router.get('/countrys/update/:_id', updateCountryView);
router.post('/countrys/update/:_id', updateCountry);
router.post('/countrys/:_id', deleteCountry);

module.exports = router;

// SHOW LIST
async function showCountryList(req, res) {
    const countryList = await Service.getCountryList();
    // const result = { data:countryList, count:countryList.legth };
    res.render('CountryListView',{ data: countryList, count: countryList.length});
}

// SHOW DETAIL
async function showCountryDetail(req, res) {
    try {
        const _id = req.params._id;
        console.log('Country Id: ', _id);
        const info = await Service.getCountryDetail(_id);
        
        res.render('CountryDetailView',{ info: info });
        // res.send(info);
    } 
    catch (error) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:error.msg});
    }
}

// ADD
function addCountryView(req, res) {
    res.render('CountryAddView');
}

async function addCountry(req, res) {
    const data = req.body;
    
    if (!data.name) {
        res.status(400).send({ error: 'name 누락'});
        return;
    }

    try {
        const result = await Service.addCountry(data);
        res.send({msg:'success', data:result});
    } catch (error) {
        res.status(500).send(error.msg);
    }
}

// DELETE
async function deleteCountry(req, res) {
    try {
        const _id = req.params._id;
        console.log('DELETED GAME : ', _id);
        const result = await Service.deleteCountry(_id);
        res.send({msg:'COMPLETE: DELETED GAME INFO', data:result});
    }
    catch ( error ) {
        res.status(400).send({error:'FAILED: DELETED GAME INFO'});
    }
}

// UPDATE
async function updateCountryView(req, res) {
    try {
        const _id = req.params._id;
        console.log('Country Id: ', _id);
        const info = await Service.getCountryDetail(_id);
        res.render('CountryUpdateView',{info: info});
        // res.send(info);
    } 
    catch (error) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:error.msg});
    }
}

async function updateCountry(req, res) {
    
    const data = req.body;
    console.log('UPDATED GAME : ', data._id);

    const name = data.name;
    const language = data.language;
    const capital = data.capital;

    console.log('CHECK DATA: ', data);

    if (!name || !language || !capital) {
        res.status(400).send({error:'PLEASE ENTER ALL VALUES'});
        return;
    }

    try {
        const result = await Service.updateCountry(data);
        res.send({msg:'COMPLETE: UPDATED ' + data._id, data:result});
    }
    catch ( error ) {
        console.error(error);
        res.status(500).send({error:'FAILED: UPDATE GAME INFO,'});
    }
}