//adoott rendelést lekérdezi az adatbázisból
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getorder");
        next();
    }
}