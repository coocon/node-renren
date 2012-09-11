var http = require('http'),
    querystring = require('querystring'),
    setting = require('./setting');
var post_data = querystring.stringify(setting.data),
    options = setting.options_code;
options.headers['Content-Length'] = post_data.length;
console.log('正在获取验证码，请稍后........');
var onRequest = function(res) {
        var body = '';
        console.log('status: ' + res.statusCode);
        console.log("headers: ", res.headers);
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function() {
            var o = JSON.parse(body); 
            console.log(o);
        });
    },
    onError = function(e) {
        console.error("error:"+e.message); 
    };

var req = http.request(options, onRequest);
req.on('error', onError)
req.write(post_data)
req.end();
