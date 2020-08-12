const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')

exports.data =(country,ab) =>{
//.  console.log('yes')

 fetch('https://api.covid19api.com/country/'+country+'?from=2020-03-01T00:00:00Z&to=2020-08-01T00:00:00Z')
     .then(response => response.json())
     .then(data=> {
       if(!data.message){
         let re = 0 , con = 0 ,death=0,active=0
         for(let i = 0;i<data.length;i++){
           con += parseInt(data[i].Confirmed)
           re+=+parseInt(data[i].Recovered)
           death+=+parseInt(data[i].Deaths)
           active+=parseInt(data[i].Active)
         }

             let data_fetched = data;
        let msg = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(data[0].Country)
	.setAuthor('Covid 19 Stats')
	.addFields(
	  
		{ name: 'Confirmed', value: con.toLocaleString(), inline: true },
		{ name: 'Deaths', value: death.toLocaleString(), inline: true },
		{ name: 'Recovered', value: re.toLocaleString(), inline: true },
	{ name: 'Active', value: active.toLocaleString(), inline: true }
	)
	//.setImage('https://ibb.co/x221x1p')
	.setTimestamp()
	ab.send(msg)}
	else{
	  ab.send('Place not found .. only countries allowed')
	}})


//console.log('some place')
}

