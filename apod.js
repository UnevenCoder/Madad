const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
let key = process.env.nasa
///color,title,autho,descr
//iption,image,operation
exports.apod=(ab)=>{
fetch('https://api.nasa.gov/planetary/apod?api_key='+key)
.then(res=>res.json())
.then(data=>{
  if(data.media_type!='video'){
  
ab.send({embed:embed.embedded('#0099ff',data.title,data.date,data.explanation,data.url,'Nasa Pic of the day')})
  }
  else{
    let link = 'https://www.youtube.com/embed/DzrCEm1ZBRY?rel=0' , regex=/[h][t][t][p][s][:][/][/][w][w][w][.][y][o][u][t][u][b][e][.][c][o][m][/][e][m][b][e][d][/]/
    let send = link.replace(regex, '')
    let link2send= send.slice(0,11)
   ab.send({embed:embed.embedded('#0099ff',data.title,data.date,data.explanation,data.url,'Nasa Pic of the day')}) 
    ab.send('https://youtu.be/'+link2send)
  }
})

}