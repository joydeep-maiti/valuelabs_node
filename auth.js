const jwt = require('jsonwebtoken');
const privateKey = 'privatekey';

const generateToken = ()=>{
    return token = jwt.sign({ token: 'tokenforauthentication' }, privateKey);
}

const validateToken = (token)=>{
    const res = jwt.verify(token, privateKey)
    console.log('res', res)
}

module.exports = {
    generateToken,
    validateToken
}