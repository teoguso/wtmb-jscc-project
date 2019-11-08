const express = require('express')
const bodyParser = require('body-parser')
const BarService = require('./services/bar-service')
const DistrictService = require('./services/district-service')
const ReviewService = require('./services/review-service')

const app = express()

const projectRoot = __dirname
app.set('view engine', 'pug')

app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.render('index')
})

// Bar endpoints
app.get('/bar/all', async (req, res) => {
  const bars = await BarService.findAll()
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
  res.send(bar)
})

app.delete('/bar/:id', async (req, res) => {
  id = req.params.id
  await BarService.del(id)
  res.send('OK')
})

app.post('/bar/:id/review', async (req, res) => {
  const body = req.body
  const id = req.params.id
  const bar = await BarService.find(id)
  bar.addReview(body)
  await BarService.update(id, bar)
  res.send(review)
})

// District endpoints
app.get('/district/all', async (req, res) => {
  const districts = await DistrictService.findAll()
  res.render('district', { districts: districts })
})

app.get('/district/:id', async (req, res) => {
  const id = req.params.id
  const district = await DistrictService.find(id)
  res.send(district)
})

app.post('/district', async (req, res) => {
  const body = req.body
  district = await DistrictService.add(body)
  res.send(district)
})

app.delete('/district/:id', async (req, res) => {
  id = req.params.id
  await DistrictService.del(id)
  res.send('OK')
})

// Review endpoints
app.get('/review/all', async (req, res) => {
  const reviews = await ReviewService.findAll()
  res.render('review', { review: reviews })
})

app.get('/review/:id', async (req, res) => {
  const id = req.params.id
  const review = await ReviewService.find(id)
  res.send(review)
})

app.post('/review', async (req, res) => {
  const body = req.body
  review = await ReviewService.add(body)
  res.send(review)
})

app.delete('/review/:id', async (req, res) => {
  id = req.params.id
  await ReviewService.del(id)
  res.send('OK')
})

app.listen(3000, () => {
  console.log('Server listening')
})
