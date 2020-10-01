url='https://yesno.wtf/api/'
const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
//color,title,autho,description,image,operation)
exports.yon=(ab)=> {
fetch(url).then(res=>res.json())
.then(data=>{
//const attachment = new Discord.MessageAttachment(data.memes[0].url);

 //ab.send({embed:embed.embedded('#00000','','','',data.image,'answered by madad :)')})
ab.send(data.answer+' '+data.answer, {files: [data.image]})

})


}
