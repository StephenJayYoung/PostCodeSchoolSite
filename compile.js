var handlebars = require('handlebars');
var fs=require('fs'); //node core library


var templatefile='index.hbs'
var templatedata=fs.readFileSync(templatefile,'utf-8');

var template = handlebars.compile(templatedata);
var data={name:'world'};
var data =require('./projects.json');

data={

	row:[
	{project:data.slice(0,3)},
	{project:data.slice(0,3)}

]
}

fs.writeFileSync('dist/index.html', template(data))