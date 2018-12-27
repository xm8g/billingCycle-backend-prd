const _ = require('lodash')
module.exports = (req, res, next) => {
    const bundle = res.locals.bundle
    if (bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({ errors }) //ECMA 2015 gera um novo objeto a partir da referencia
    } else {
        next()
    }
}
const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}