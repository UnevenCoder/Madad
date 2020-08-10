const Discord = require('discord.js');
//const Discord = require('discord.js');

// inside a command, event listener, etc.
exports.help=(ab) =>{
  let msg = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help Executed')
	.setAuthor(';help sends this message ')
	.addFields(
	  { name: ';prefix + new prefix', value: 'Changes the prefix to a new prefix', inline: true },
		{ name: ';meme', value: 'Returns a random meme', inline: true },
		{ name: ';wiki + search', value: 'Returns search result on wikipedia', inline: true },
		{ name: ';quote', value: 'Returns a random quote', inline: true },
		{ name: ';avatar', value: 'Returns your avatar', inline: true }
		,
		{ name: ';tem', value: 'Experimental don\'t try', inline: true },
				{ name: ';delete + value ', value: 'Deletes a specific number of tweets ', inline: true },

		{ name: ';clear', value: 'Clears msgas of the last 14 days ', inline: true },
		{ name: ';kick + member', value: 'Kicks the member', inline: true },
		{ name: ';ban + member', value: 'Bans the member', inline: true },
	)
	//.setImage('https://ibb.co/x221x1p')
	.setTimestamp()
	
	
ab.send(msg);
}