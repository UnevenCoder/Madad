const Discord = require('discord.js')
//const Discord = require('discord.js')

// inside a command, event listener, etc.
exports.help=(ab) =>{
  let msg = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help Executed')
	.setAuthor('help sends this message ')
	.addFields(
	  { name: 'in built welcome', value: 'sends welcome dm to new people who join the server', inline: true },
	  { name: '-covid + place ', value: 'returns covid stats of the place', inline: true },
	  { name: '-cipher + value ', value: 'returns simple encrypted text with rot-13 algorithm', inline: true },
	  { name: '-w space +place', value: 'Returns the temperature of the place', inline: true },
	  { name: '-cat', value: 'Returna a cute cat pic ', inline: true },
	  { name: '-joke', value: 'Returns a new joke', inline: true },
		{ name: '-meme', value: 'Returns a random meme', inline: true },
		{ name: '-wiki + search', value: 'Returns search result on wikipedia', inline: true },
		{ name: '-quote', value: 'Returns a random quote', inline: true },
		{ name: '-avatar', value: 'Returns your avatar', inline: true }
		,
		
				{ name: '-delete + value ', value: 'Deletes a specific number of tweets ', inline: true },

		{ name: '-clear', value: 'Clears msgs of the last 14 days ', inline: true },
		{ name: '-kick + member', value: 'Kicks the member', inline: true },
		{ name: '-ban + member', value: 'Bans the member', inline: true },
	)
	//.setImage('https://ibb.co/x221x1p')
	.setTimestamp()
	
	
ab.send(msg)
}