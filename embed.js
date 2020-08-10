const Discord = require('discord.js');
exports.embedded = (color,title,autho,description,image,operation) => {
  if(image==''){
    const ember = {
	color: color,
	title: title,
	author: {
		name: autho
	},
	description: description,
	timestamp: new Date(),
	footer: {
		text: operation
	}
};
//console.log(ember)
return ember
  }
  else{
    const ember = {
	color: color,
	title: title,
	author: {
		name: autho
	},
	description: description,
	//thumbnail: {
		//url: image
	//},
	image: {
		url: image
	},
	timestamp: new Date(),
	footer: {
		text: operation
	}
};
//console.log(ember)
return ember
}
}