//adott étterem adott ételét kérdezi le az adatbázisból
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.offer = {
            _id : "1",
            name : "egyes",
            price : "1000",
            desc : "leiras1................................"
        };

        next();
    }
}