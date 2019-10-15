function log(req, res, next) {
    console.log('authing..');
    next();
}

module.exports = log;