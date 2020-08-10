const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
//color,title,autho,description,image,operation)
exports.tem=(ab)=> {
fetch('https://api.imgflip.com/get_memes').then(res=>res.json())
.then(data=>{
//const attachment = new Discord.MessageAttachment(data.memes[0].url);
for(let i = 0;i<data.data.memes.length;i++){
 ab.send({embed:embed.embedded('#00000','','','',data.data.memes[i].url,'id='+data.data.memes[i].id)})
  //ab.send(attachment)
}
})
}