const jwt = require('jsonwebtoken');

const verificarToken = ((req, res, next) => {
    const header = req.headers['authorization'];
    if (header) {
        const token = header.split(" ")[1];
        req.token = token;
        //verificamos
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (error, data) => {
            if (error) {
                res.sendStatus(403);
            } else {
                next();
            }
        }); 
    } else {
        res.sendStatus(403);
    }
});
module.exports=verificarToken;