import Express from 'express'
import {$transformByObj, $transformByURL} from './dist/main.js'

const port = process.env.port || 3006
const app = Express()
app.use(Express.json())

app.post('/transformbyobj', $transformByObj)
app.get('/transformbyobj', {W: ""})
app.post('/transformbyurl', $transformByURL)
app.get('/', (req,res) => res.send({}))

app.listen(port , () => console.info(`🚀 Running in port ${port}`,))
