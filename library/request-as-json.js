var request = require("request");

function requestAsJson (url, callback){
    request(url, function(error, result){
        if (error){
            callback(error);
        }
        else {
            try {
                callback (null, JSON.parse(result.body));
            }
            catch (error){
                callback (error);
            }
        }
    });
}

module.exports = requestAsJson;