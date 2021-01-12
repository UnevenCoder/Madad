const fetch = require('node-fetch')
const embed = require('./embed.js')

exports.imgSearch=(query,ab)=> {
const response = fetch('https://api.pexels.com/v1/search?query='+query+'&per_page=200&', {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Authorization": "563492ad6f917000010000018314d9831b26411bb692ec6625c6be87",
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }})
    .then(res=>res.json())
    .then(data=>{
  
      let tosend=[]
      data.photos.forEach(x=>tosend.push([x.src,x.photographer]))
      let newEmbed = tosend[Math.floor(Math.random() * tosend.length)]
       ab.send({embed:embed.embedded('','','','',newEmbed[0].large,newEmbed[1])})
// = (color,title,autho,description,image,operation)
      })
}