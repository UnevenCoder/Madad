const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
//color,title,autho,description,image,operation)
exports.meme=(message,ab)=> {
fetch('https://meme-api.herokuapp.com/gimme/1').then(res=>res.json())
.then(data=>{
//const attachment = new Discord.MessageAttachment(data.memes[0].url);

if(data.memes[0]['nsfw']===false){
 ab.send({embed:embed.embedded('#00000','','','',data.memes[0].url,'meme generated by madad :)')})
  //ab.send(attachment)
}
else{
  meme()
}
})
}