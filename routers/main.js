import transformByObj from './transformByObj.js'
import transformByURL from './transformByURL.js'

export function $transformByObj(req, res) {
    const newObject = transformByObj(req.body)
    res.send(newObject)
}

export async function $transformByURL({ body }, res) {
    if (!body) { res.send({ err: 'enter the url in the request body.' }); return false }
    if (!body.url) { res.send({ err: 'object url is requerid.' }); return false }

    const newObject = await transformByURL(body.url)
    res.send(newObject)
}