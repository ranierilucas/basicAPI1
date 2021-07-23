const express = require('express') //usa protocolo http
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser') //responsavel por serializar informações enviadas
const routes = require('./config/routes')


const app = express()

//config
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())//tipo de dados que queremos receber
app.use(cors())
app.use(routes)


//ligar servidor
app.listen(21262, () => {
    console.log('express started at: http://localhost:21262')
})