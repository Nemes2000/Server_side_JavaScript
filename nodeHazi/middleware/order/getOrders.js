//Lekérdezi az összes rendelést az adatbázisból
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.orders = [
            {
                _id : "1",
                from : "egyes",
                cost : "nev1",
                cont : "leiras1"
            },
            {
                _id : "2",
                from : "kettes",
                cost : "nev2",
                cont : "leiras2"
            }
        ]
        console.log("getorders");
        next();
    }
}