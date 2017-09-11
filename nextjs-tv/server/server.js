import express from 'express'
import next from 'next'
import to from '../components/to'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const [err] = await to(app.prepare())
if (err) {
  console.error(err.stack)
  process.exit(1)
}

const server = express()
server.get('/p/:id', (req, res) => {
  const actualPage = '/post'
  const queryParams = { id: req.params.id }
  app.render(req, res, actualPage, queryParams)
})

server.get('*', (req, res) => handle(req, res))

server.listen(3000, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:3000')
})
