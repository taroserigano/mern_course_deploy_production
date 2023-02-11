import jwt from 'jsonwebtoken'
import { UnAuthenticatedError } from '../errors/index.js'

UnAuthenticatedError
const auth = async (req, res, next) => {
  
  // get authorization from header 
  const authHeader = req.headers.authorization
  
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('Authentication Invalid')
  }
  // extract token 
  const token = authHeader.split(' ')[1]
  
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET) // payload is such as{ userId: 'r3424by45vy24', iat: 214123421:,
                                                              //        exp:5462362436326 } 
    req.user = { userId: payload.userId }                     // that gets generated when JWT.verfiied successfully 
//     const decoded = jwt.verify(token, process.env.JWT_SECRET)
//     req.user = { userId: decoded.userId }
    next()
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid')
  }
}

export default auth
