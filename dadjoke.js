const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
//color,title,autho,description,image,operation) 
exports.joke =async (ab)=>{
const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
}).then(RES=>RES.json())
.then(data=>{
ab.send({embed:embed.embedded('',data.joke,'','','','Joke by madad :)')})
})}