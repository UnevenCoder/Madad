const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
//color,title,autho,description,image,operation)
exports.github=(ab,name)=>{
fetch('https://api.github.com/users/'+name)
.then(res=>res.json())
.then(data=>{
  if(data.type!='Organization' && data.followers){
  let msg = new Discord.MessageEmbed()
	.setColor('#0099ff')
//	.setTitle()//+data.definitions[0].emoji)
	.setAuthor(data.company?data.name+' , '+data.company:data.name)
	.addFields(
		{ name: 'Bio', value: data.bio? data.bio :'User has no bio', inline: true },
		{ name: 'Followers', value: data.followers, inline: true },
			{ name:'Account Type', 'User', inline:true},
			{ name: 'Following', value: data.following, inline: true }
	)
	.setImage(data.avatar_url)
	.setTimestamp()
	
	ab.send({embed:msg})}
	else{
	  fetch('https://api.github.com/orgs/'+name)
.then(res=>res.json())
.then(data=>{
//  console.log(data)
  if(data.name){
  let msg = new Discord.MessageEmbed()
	.setColor('#0099ff')
//	.setTitle()//+data.definitions[0].emoji)
	.setAuthor(data.company?data.name+' , '+data.company:data.name)
	.addFields(
		{ name: 'Blog', value: data.blog? data.blog :'User has no blog', inline: true },
		{ name: 'Location', value: data.location, inline: true },
			{ name: 'Twitter', value: data.twitter_username, inline: true },
			{ name:'Email', value:data.email,inline:true},
			{ name:'Account Type', 'Organization', inline:true},
			{ name:'Verified' ,value:data.is_verified?'Yes':'No',inline:true}
	)
	.setImage(data.avatar_url)
	.setTimestamp()
	
	ab.send({embed:msg})
  }
    else{
      ab.send('Username / Organization not found sry :(')
    }
  
	
})
}})}
