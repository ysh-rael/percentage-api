import Express from 'express'
import {$transformByObj, $transformByURL} from './routers/main.js'

const port = process.env.port || 3006
const app = Express()
app.use(Express.json())

app.post('/transformbyobj', $transformByObj)
app.post('/transformbyurl', $transformByURL)

app.listen(port , () => console.info(`🚀 Running in port ${port}`,))
