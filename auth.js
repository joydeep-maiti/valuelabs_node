const jwt = require('jsonwebtoken');
const privateKey = 'privatekey';

const generateToken = ()=>{
    return token = jwt.sign({ token: 'tokenforauthentication' }, privateKey);
}

const validateToken = (token)=>{
    jwt.verify(token, privateKey)
}

module.exports = {
    generateToken,
    validateToken
}