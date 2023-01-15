export default function transformByURL(obj) {
    try { if (typeof obj !== 'object') obj = JSON.parse(obj) } catch (err) {
        const errMessage = 'invalid object'
        console.log(errMessage, err)
        return { errMessage }
    }
    if (!obj) return {}

    const _100porcent = Object.values(obj).reduce((total, atual) => total + atual) / 100

    const porcent = Object.values(obj).map(element => (parseInt(element / _100porcent) - (element / _100porcent) == 0) && (element / _100porcent) >= 1 ? parseInt(element / _100porcent) : (element / _100porcent).toFixed(2))

    const newObject = obj
    const keys = Object.keys(obj)
    porcent.forEach((porcent, indice) => newObject[keys[indice]] = porcent)
    return newObject
}
