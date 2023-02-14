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
            },
            {
                _id : "3",
                name : "harmas",
                price : "3000",
                desc : "leiras3"
            }
        ]
        console.log("getoffers");
        next();
    }
}