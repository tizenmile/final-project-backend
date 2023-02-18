const jwt = require('jsonwebtoken')
const {HttpError} = require('../helpers/errors')

const authMiddleware = (reg, res, next) => {
    const [tokenType, token] = reg.headers['authorization'].split(' ')
    if (!token) {
     next(new HttpError(401, 'Please, provide a token'))
    }
    if (tokenType !== 'Bearer') {
     next(new HttpError(401, 'Please provide the correct token type'))
    }
    try {
        const user = jwt.decode(token, process.env.JWT_SECRET)
        reg.token = token
        reg.user = user
     next()
    } catch (error) {
      next(new HttpError(401, 'Invalid token'))
    }
    }

module.exports = {
    authMiddleware
}