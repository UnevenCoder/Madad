let key='process.env.api'
const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')

exports.weather=function (place,ab){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+place+'+&appid='+key)
  .then(response=>response.json())
  .then(data=>{
  if(data.error)ab.send('Place doesn\'t exist or you didn\'t mention a city name or you passed multiple words .. bot takes account only of the first word after prefix ')
  else{
  // inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(data.name)      
	.setDescription(data.weather[0].description)
	.addFields(
		{ name: 'Temperature :' ,value:(data.main.temp-273.15).toFixed(2) +' C' ,inline: true },
		{ name: 'Humidity :' ,value:data.main.humidity ,inline: true },
		{ name: 'Feels Like :' ,value:(data.main.feels_like-273.15).toFixed(2) +' C', inline: true })
	.setTimestamp()
	.setFooter('Weather data by Madad');
  
  //console.log(exampleEmbed)
  ab.send({embed:exampleEmbed})
  }})
  }


