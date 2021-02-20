
const Owlbot=require('owlbot-js')
const Discord=require('discord.js')
const embed=require('./embed.js')
var client = Owlbot(process.env.dict);
//(color,title,autho,description,image,operation)
exports.dict=(word,ab)=>{
  
client.define(word).then(function(data){
 
 // if(!data.response.status){
   console.log(data)
   let msg = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(word)//+data.definitions[0].emoji)
	.setAuthor('Definition')
	.addFields(
		{ name: 'Type', value: data.definitions[0].type, inline: true },
		{ name: 'Definition', value: data.definitions[0].definition, inline: true },
			{ name: 'Example', value: data.definitions[0].example, inline: true },
		
	)
	.setImage(data.definitions[0].image_url)
	.setTimestamp()
	
	ab.send({embed:msg})

})
client.define(word).catch(function(data){
  console.log(data)
  ab.send('Word not found try again sorry :)')
})
}