const express = require('express');
const router = express.Router();
const countryModel = require('../model/CountryModel');


// router.get('/country', showcountryList);
router.get('/country/:id',showCountryDetail);
router.get('/country/add',showCountryAddView);
router.post('/country/add', addcountry);
router.get('/country/edit/:id',showCountryEditView);
router.post('/country/edit', updatecountry);
router.post('/country/delete/:id', deletecountry);


module.exports = router;

router.get('/country', async (req, res) => {
    const countryList = await countryModel.getCountryList()
    res.render('CountryListView', {data:countryList, count:countryList.length});
});

async function showCountryDetail(req, res) {
    try {
        const Id = req.params.id;
        const countryData = await countryModel.getCountryDetail(Id);

        res.render('CountryDetailView', { detail: countryData });
    } catch(error) {
        console.log('Can not find, 404');
        res.status(error.code).send({ msg: error.msg });
    }
}

function showCountryAddView(req, res) {
        res.render('CountryAddView');    
}

async function addcountry(req, res) {
    const data = req.body
    try {
        const result = await countryModel.addcountry(data);
        res.render('CheckCompleteView',{msg:'add success'});
        // res.send({msg:'success', data:result});
    } catch (error) {
        // res.render('CheckCompleteView',{msg:'add fail'});
        res.status(500).send(error.msg);
    }
}

async function showCountryEditView(req, res) {
    try {
        const id = req.params.id;
        console.log('country: ', id);
        const info = await countryModel.detailCountry(id);
        res.render('CountryEditView',{info:info});
    } 
    catch (error) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:error.msg});
    }
}

async function updatecountry(req, res) {
    
    const data = req.body;
    console.log(req.body);
    const name = req.body.name;
    const language = req.body.language;
    const capital = req.body.capital;

    if ( !name || !language || !capital) {
        res.status(400).send({error:'Fail'});
        return;
    }

    try {
        const result = await countryModel.updatecountry(data);
        // res.send({msg:'Updated country' + data.name, data:result});
        res.render('CheckCompleteView',{msg:'update success'});
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
        res.render('CheckCompleteView',{msg: 'delete success'});
    }
    catch ( error ) {
        res.status(400).send({error:'Fail'});
    }
}