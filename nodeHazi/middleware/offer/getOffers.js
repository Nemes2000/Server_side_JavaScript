//Adott étterem menű kinálatát szerzi meg az adatbázisból
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.offers = [
            {
                _id : "1",
                name : "egyes",
                price : "1000",
                desc : "leiras1"
            },
            {
                _id : "2",
                name : "kettes",
                price : "2000",
                desc : "leiras2"
            }
        ]
        next();
    }
}