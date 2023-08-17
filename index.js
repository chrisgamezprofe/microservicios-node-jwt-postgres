const express = require('express')
const cors  = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const customResponse = require('./utils/constants');
const paqueteRoutes = require('./routes/paquetesRoute');
const usuariosRoutes = require('./routes/usuariosRoute');
const verificarToken = require('./utils/verifyToken')



const app = express()
app.use(bodyParser.json())
app.use(cors())
// let’s you use the cookieParser in your application

app.use('/api/v1', usuariosRoutes);
app.use('/api/v1',verificarToken, paqueteRoutes);
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })

})
// Basic 404 handler
app.use((req, res) => {
    res.status(404).send({
      message: 'The requested URL could not be found.',
      statusCode: 404,
    });
});
  
app.use((error, req, res, next) => {
    const { message } = customResponse.serverError;
    const data = {
    Code: `${error.code ? error.code : ''}`,
    Stacktrace: `${error.stack}`
    };
    res.status(500).json({ message, data });
});


  
const port = 3800

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  

