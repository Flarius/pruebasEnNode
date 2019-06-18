const express = require ('express');
const app = express();

//settings 
app.set('port', 3000);

//routes
app.get('/', (req, res) => {
   res.sendFile();
});

//listening the server
app.listen(app.get('port'), () => {
   console.log('Servidor en marcha! en el puerto', app.get('port'));
});