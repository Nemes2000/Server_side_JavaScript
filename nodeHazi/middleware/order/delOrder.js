//Adott rendelést töröl
module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    }
}