//paraméterként kapott étterem adatait szerzi meg az adatbázisból
module.exports = function (objectrepository) {
    return function (req, res, next) {
        // if(typeof req.body === "undefined"){
        //     return next();
        // }

        res.locals.canteen = {
            _id : "2",
            name : "egyes",
            leader : "nev1",
            desc : "leiras1.......................................",
            mobil : "0000000"
        };
        console.log("getcanteen");
        next();
    }
}