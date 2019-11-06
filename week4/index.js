const express = require('express')
const bodyParser = require('body-parser')
const BarService = require('./services/bar-service')

const app = express()

const projectRoot = __dirname
app.set('view engine', 'pug')

app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.render('index')
})

app.get('/bar/all', async (req, res) => {
  const bars = await BarService.findAll()
//   res.send(bars)
  res.render('bar', { bars: bars })
})

app.get('/bar/:id', async (req, res) => {
  const id = req.params.id
  const bar = await BarService.find(id)
  res.send(bar)
})

app.post('/bar', async (req, res) => {
  const body = req.body
  bar = await BarService.add(body)
  // console.log(person)
  res.send(bar)
})

app.delete('/person/:id', async (req, res) => {
  id = req.params.id
  await personService.del(id)
  res.send('OK')
})

app.listen(3000, () => {
  console.log('Server listening')
})
