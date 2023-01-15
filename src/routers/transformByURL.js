import axios from "axios"
import transformInPercentege from './transformByObj.js'

export default async function transformByURL(url) {

    const {data} = await axios.get(url)
    return transformInPercentege(data)
}
