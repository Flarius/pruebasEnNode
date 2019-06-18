const express = require ('express');
const router =  express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {titulo: 'Pagina principal'});
});
router.get('/contact', (req, res) => {
    res.render('contacto.html', {titulo: 'Pagina de contacto'});
});
module.exports = router;