// = (color,title,autho,description,image,operation)
const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
  let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

exports.cat=(ab)=>{
  let rand=Math.floor(Math.random() * 10)
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(res=>res.json())
  .then(data=>ab.send({embed:embed.embedded(colors[rand],'','','',data[0].url,'Cat img')}))
}