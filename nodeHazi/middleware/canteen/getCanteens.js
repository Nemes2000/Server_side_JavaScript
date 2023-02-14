/* Adatbázisbol megszerzi az összes étterem összes adatát*/
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.canteens = [
            {
                _id : "1",
                name : "egyes",
                leader : "nev1",
                desc : "leiras1",
                mobil : "0000000"
            },
            {
                _id : "2",
                name : "kettes",
                leader : "nev2",
                desc : "leiras2",
                mobil : "1111111"
            }
        ]
        console.log("getcanteens");
        next();
    }
}