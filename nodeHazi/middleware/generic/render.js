/* A tartalmat jeleniti meg*/
module.exports = function (objectrepository, viewName) {
    return function (req, res, next) {
        console.log("render"+viewName);
        res.render(viewName, res.locals);
    }
}