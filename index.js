import Express from 'express'
import { $transformByObj, $transformByURL } from './routers/main.js'

const port = process.env.port || 3008
const app = Express()
app.use(Express.json())

app.post('/transformbyobj', $transformByObj)
app.post('/transformbyurl', $transformByURL)

app.get('/transformbyobj', (req, res) => res.send({ Warning: "POST method must be used on this route." }))
app.get('/transformbyurl', (req, res) => res.send({ Warning: "POST method must be used on this route." }))
app.get('/', (req, res) => res.send({ Warning: "Access the /transformbyobj or /transformbyurl routes using the POST method to use this API." }))

app.listen(port, () => console.info(`🚀 Running in port ${port}`,))
