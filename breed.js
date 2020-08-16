
// = (color,title,autho,description,image,operation)
const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
  let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

exports.breed=(ab,breed)=>{
  let rand=Math.floor(Math.random() * 10)
  console.log(breed,'https://dog.ceo/api/breed/'+breed+'/images/random')
  fetch('https://dog.ceo/api/breed/'+breed+'/images/random')
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  if(data.status=='success'){
  ab.send({embed:embed.embedded(colors[rand],'','','',data.message,'Dog img')})
  }
  else{
    ab.send('breed not found try breed + type .. like Shepherd Australian instead of Australian Shepherd .. hope it makes sense :)')
  }
  
})}