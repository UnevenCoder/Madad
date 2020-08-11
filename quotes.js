const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
  // = (color,title,autho,description,image,operation) 
exports.quote= (wts) =>{
  let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
let rand=Math.floor(Math.random() * 10);
  let num = Math.floor(Math.random()*100);
fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => {
     // a=res.JSON(data['quotes'][num]['quote']);
      let random= data['quotes'][num]['quote'];
      let author=data['quotes'][num]['author']
//console.log(random,author)
wts.send({embed:embed.embedded(colors[rand],'',author,random,'','Random Quote by Madad :)')})
    })
  
}
//export default c