const express = require('express')
const routes = express.Router()


let db = [
    { '1': { nome: 'Cliente 1', idade: '10' } },
    { '2': { nome: 'Cliente 2', idade: '20' } },
    { '3': { nome: 'Cliente 3', idade: '30' } }
]

//usar http (operações) com request
//buscar dados
routes.get('/', (req, res) => {
    return res.json(db)
})

//inserir dados
routes.post('/add', (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).end()
    }

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    db = db.filter(item => {
        if (!item[id])
            return item
    })

    return res.send(db)
})

module.exports = routes