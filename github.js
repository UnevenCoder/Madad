const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
//color,title,autho,description,image,operation)
exports.github=(ab,name)=>{
fetch('https://api.github.com/users/'+name)
.then(res=>res.json())
.then(data=>{
  if(data.bio){
  let msg = new Discord.MessageEmbed()
	.setColor('#0099ff')
//	.setTitle()//+data.definitions[0].emoji)
	.setAuthor(data.company?data.name+' , '+data.company:data.name)
	.addFields(
		{ name: 'Bio', value: data.bio, inline: true },
		{ name: 'Followers', value: data.followers, inline: true },
			{ name: 'Following', value: data.following, inline: true }
	)
	.setImage(data.avatar_url)
	.setTimestamp()
	
	ab.send({embed:msg})}
	else{
	  ab.send('Username not found try again please :)')
	}
})
}