const httpStatus = require('http-status-codes');

exports.respondWithInternalError =(error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    res.status(errorCode);
    res.send (`${errorCode} | Sorry, our application include some errors !`);
};

exports.respondNotFound =(req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send (`${errorCode} | This page does not exist !`);
};