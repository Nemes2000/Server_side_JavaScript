//adatbázisból megszerzi az éttermek nevét
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("főoldal");
        next();
    }
}