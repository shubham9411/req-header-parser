var express = require('express')
var app = express()
app.listen(process.env.PORT || 8100 )
app.get('/api/whoami/',function(req,res){
	res.setHeader('Content-Type', 'application/json; charset=utf-8')
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
	var lang = req.headers['accept-language'].split(',')[0]
	var agent = req.headers['user-agent']
	var soft = agent.slice(agent.indexOf('(')+1, agent.indexOf(')'))
	res.json({
		'ipaddress' : ip,
                'language'  : lang,
                'software'  : soft
	})
})

app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});
