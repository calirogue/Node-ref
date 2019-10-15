each module is wrapped in a function

(function (exports, require, module, __filename, __dirname) {

    console.log(__filename);
    console.log(__dirname);
    let url = 'http://mylogger.io/log';
    
    function log(message) {
        // send http request
        console.log(message);
    }
    
    module.exports = log; 

    
})



