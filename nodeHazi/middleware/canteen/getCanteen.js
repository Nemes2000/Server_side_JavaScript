//paraméterként kapott étterem adatait szerzi meg az adatbázisból
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.canteen = {
            _id : "1",
            name : "egyes",
            leader : "nev1",
            desc : "leiras1.......................................",
            mobil : "0000000"
        };
        next();
    }
}