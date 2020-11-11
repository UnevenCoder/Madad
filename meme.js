const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
const red='r/programmerHumor'

//color,title,autho,description,image,operation

exports.meme=async (ab)=> {
    let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    let pos = ['top','hot','new']
    let ra=Math.floor(Math.random() * 3);
   let rand=Math.floor(Math.random() * 10);
  let arr=[]
  fetch('https://www.reddit.com/'+red+'/'+pos[ra]+'.json')
  .then(function(res) {
    return res.json();   // Convert the data into JSON
  })
  .then(async function(d) {
d.data.children.forEach(x=>{
      if(x.data.selftext=="" && x.data.over_18==false && x.data.link_flair_text=='Meme'){
        arr.push([colors[rand],x.data.title,'','',x.data.preview.images[0].source.url.replace('&amp;','&'),x.data.author_fullname])
      }
     
      })
      console.log(arr.length)
let c = Math.floor(Math.random() * arr.length);
      await ab.send({embed:embed.embedded(arr[c][0],arr[c][1],arr[c][2],arr[c][3],arr[c][4],arr[c][5])})
    })  // Logs the data to the console
  .catch(x=>console.log(x))  //ab.send(attachment)
}