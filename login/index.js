var http = require('http'),
    querystring = require('querystring'),
    setting = require('./setting'),
    friends = require('../friends');
var post_data = querystring.stringify(setting.data),
    options = setting.options_login;
options.headers['Content-Length'] = post_data.length;
console.log('帐号' + setting.data.email + '正在登陆人人网，请稍后........');

var setCookie;

var onRequest = function(res) {
        var body = '';
        console.log('*****************************')
        console.log('status: ' + res.statusCode);
        console.log("headers: ", res.headers);
        console.log('*****************************')
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function() {
            var o = JSON.parse(body); 
            if (o.code) {
                console.log('恭喜您，登陆成功!!!!!');
                setCookie = options.headers['Cookie'] + res.headers['set-cookie'];
                friends.getFriends(setCookie);
            } else {
                console.log(o.failDescription);    
            }
        });
    },
    onError = function(e) {
        console.error("error:"+e.message); 
    };

var req = http.request(options, onRequest);
req.on('error', onError)
req.write(post_data)
req.end();
