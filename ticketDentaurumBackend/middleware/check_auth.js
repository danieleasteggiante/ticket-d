var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        if (req.headers.authorization !== undefined) {
            const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : res.send("Header non presente");
            const idUser = req.headers.sincset ? req.headers.sincset.substring(5, 11) : "Header non presente";
            const decodedToken = jwt.verify(token, '3498h3nrqhg');
            req.userData = { CodCliente: decodedToken.CodCliente };
            console.log(idUser + "-" + decodedToken.CodCliente);

            if (parseInt(idUser) === parseInt(decodedToken.CodCliente)) {
                next()
            } else {
                res.send('Unauthorized action')
            }

        } else {
            res.send('Unauthorized');
        }
    } catch (e) {
        console.log('Errore ' + e);
    }
}