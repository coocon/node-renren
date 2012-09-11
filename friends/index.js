var http = require('http'),
    setting = require('./setting');

var getFriends = exports.getFriends = function() {
    var options = setting.options_login;
    console.log(options.headers['Cookie']);
    console.log('正在获取好友列表请稍候 ');
    var onRequest = function(res) {
            var body = '';
            console.log('*****************************')
            console.log('status: ' + res.statusCode);
            console.log("headers: ", res.headers);
            console.log('*****************************')
            res.setEncoding('utf8');
            res.on('data', function(chunk){
                console.log(chunk);
                body += chunk;
            });
            res.on('end', function() {
                //var o = JSON.parse(body); 
                console.log(body);
            });
        },
        onError = function(e) {
            console.error("error:"+e.message); 
        };

    var req = http.request(options, onRequest);
    req.on('error', onError)
    req.end();
}

getFriends();

