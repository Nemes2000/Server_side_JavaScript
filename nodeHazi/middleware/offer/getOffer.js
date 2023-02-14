//adott étterem adott ételét kérdezi le az adatbázisból
module.exports = function (objectrepository) {
    return function (req, res, next) {
        // if(typeof req.body === "undefined"){
        //     return next();
        // }

        res.locals.offer = {
            _id : "1",
            name : "egyes",
            price : "1000",
            desc : "leiras1................................"
        };
        console.log("getoffer");
        next();
    }
}