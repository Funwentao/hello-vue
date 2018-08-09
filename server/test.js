require('babel-core/register');
require('babel-polyfill');
var TopClient = require('node-taobao-topclient').default;
var client = new TopClient({
	'appkey': 'appkey',
	'appsecret': 'secret',
	'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

client.execute('alibaba.xiami.api.radio.info', {
}, function(error, response) {
	if (!error) console.log(response);
	else console.log(error);
})