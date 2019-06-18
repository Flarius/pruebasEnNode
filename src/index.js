const express = require ('express');
const app = express();
const path = require ('path');

//settings 
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine' , 'ejs');

//routes
app.use(require('./routes/'));

//listening the server
app.listen(app.get('port'), () => {
   console.log('Servidor en marcha! en el puerto', app.get('port'));
});