//adott étterem adott éetlét törli
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("deloffer");
        next();
    }
}