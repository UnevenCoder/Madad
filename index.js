const Discord = require('discord.js');
const dog=require('./dog.js')
const breed=require('./breed.js')
const github=require('./github.js')
const dict=require('./dict.js')
const apod=require('./apod.js')
const meme=require('./meme.js')
const jokes=require('./joke.js')
const dadjoke=require('./dadjoke.js')
const quotes = require('./quotes.js')
const help=require('./help.js')
const cat = require('./cat.js')
const w=require('./w.js')
const apod2=require('./apod2.js')
const cipher=require('./cipher.js')
const newUsers = [];
const covid = require('./covid.js')
const express = require('express');
const yon = require('./yon.js')
const GImgs = require('./SearchImg.js')


let blacklist_words=['girls','women','gays','lgbt','lesbian','nude','sexy','boob','tits' ,'tity', 'ass', 'booty' ,'sex' ,'naked', 'boobies','nude women']
const client = new Discord.Client({
  fetchAllMembers: false,
  presence: {
    status: 'online',
    activity: {
      name: `to my Master patiently`,
      type: 'LISTENING'
    } 
  }
})


const embed=require('./embed.js')
let p = '-'


async function wiki(ab,search){
  let a,b=''
let keys=[],titles=[],img=[],desc=[]
    const rawData = await fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+search.toString())
 const parsedData = await rawData.json()
  try{
   for (let key in parsedData.query.pages) {
  //do stuff here
  keys.push(key.toString())
    titles.push(parsedData.query.pages[key.toString()].title)
  desc.push(parsedData.query.pages[key.toString()].extract)
}
if(parsedData.query.pages[keys[0]].thumbnail)b=parsedData.query.pages[keys[0]].thumbnail.source
 //console.log(b)
 img.push(b)
if(b){
  ab.send({embed:embed.embedded(0x0099ff,titles[0],'Wikipedia Search Results',desc[0],img[0],'Wiki Search By Madad :)')})
}
}catch(error){
  if (b==''){
    ab.send({embed:embed.embedded(0x0099ff,titles[0],'Wikipedia Search Results',desc[0],'','Wiki Search By Madad :)')})
  }
  console.log(error)
}
}
//let data = JSON.parse(localStorage.getItem('data'))
//console.log(data)
    //onsole.log(data.query.pages)

  //console.log(a)
 //    return a

//wiki('jeddah')
//const opus = require('discordjs/opus')
  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildCreate',guild=>{
//  console.log(server)
let link=''
  guild.owner.send('Thanks for having me ! You can use -help to discover commands  in the server.')
  var found = false;
  guild.channels.forEach(function(channel, id) {
      // If a channel is already found, nothing more needs to be done
      if(found == true || channel.type != "text") {
        return;
      }
      // If the channel isn't found and the bot has permission to 
      // send and read messages in the channel, send a welcome message there
      if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
        found = true;
        return channel.send("Glad to meet you all , use - to interact with me -help for all my commands ")
      }
  })
});

/*client.on('guildMemberAdd', member => {
   member.send({embed:embed.embedded('##f3ca20','Welcome to the server','Greeting from Madad','Hope you have a great time with us .. we look forward to chatting with you and sharing our knowledge and gaining yours ','','Have a great day ahead :)')});
});*/









client.on('message', async message => {
  
  if(message.channel.type == "dm") {
      //what should happen on a dm
      
      if(message.content=='hey'){
        console.log('working')
      message.reply('hi')
      
      }
      else{
        if(message.author.bot==false){message.reply({embed:embed.embedded('','https://discord.gg/WVKNWTg','Please talk to me in my home or any other discord server','','','Invitation to my home')})}
        else{
        
      }}
   } 
else{   
 if (!message.guild) return;
 // prefix 
/*
const thisWord = "hau";
if(message.content.toLowerCase().includes(thisWord)&&message.author.bot==false)
{
message.channel.send('Bilkul Hau')
return
}
const tWord = "yesh";
if(message.content.toLowerCase().includes(tWord)&&message.author.bot==false)
{
message.channel.send('Yesh I agree')
return
}
*/
if(message.content.startsWith(p)==true){
  if(message.content.startsWith(p+'yon')==true){
    yon.yon(message.channel)
  }
  
  if(message.content.startsWith(p+'invite')===true){
    message.channel.createInvite({ unique: true, temporary: false }).then(invite => {
  message.channel.send('https://discord.gg/'+invite.code);
});
  }
  if(message.content.startsWith(p+'covid')==true){
    let arr = []
    for(let i = 0 ; i<message.content.split(' ').length;i++){
      if(i!=0)arr.push(message.content.split(' ')[i].toLowerCase())
    }
    covid.data(arr.join(' '),message.channel)
  }
if(message.content.startsWith(p+'github')==true){
  let msg=[]
  for(let i = 0;i<message.content.split(' ').length;i++){
    if(i!=0)msg.push(message.content.split(' ')[i])
  }
  if(message.content.split(' ').length==1)message.channel.send('Please try the command again -github username <format')
  else{github.github(message.channel,msg.join(' '))}
}
  if(message.content==p+'avatar'){message.reply(message.author.displayAvatarURL());}
  if(message.content.startsWith(p+'nasapod')==true){
    if(message.content.split(' ').length==1){
    apod.apod(message.channel)
  }
  if(message.content.split(' ').length==2){
apod2.apod2(message.channel,message.content.split(' ')[1])
  }
  }
   if(message.content.startsWith(p+'dict')==true){
     dict.dict(message.content.split(' ')[1],message.channel)
   }
      if(message.content.startsWith(p+'log')==true){
    console.log(message.channel.guild.name,message.channel.guild.id,message.channel.guild.region,message.channel.guild.ownerID)
   }
  if(message.content==p+'joke'){jokes.joke(message.channel.guild.id,message.channel)}
  if(message.content==p+'djoke'){dadjoke.joke(message.channel)}
  if(message.content.startsWith(p+'wiki')==true){
    if (message.content.split('-').length<2){message.reply('Wiki search only accepts one param try again')}
else{ 
  let rmsg=[]
  for(let i = 0;i<message.content.split(' ').length;i++){
    if(i!=0)rmsg.push(message.content.split(' ')[i])
  }
  //console.log(rmsg.join(' '))
     wiki(message.channel,rmsg.join(' '))
  
  }}
  if(message.content==p+'quote'){
    quotes.quote(message.channel)
  }

    if(message.content.startsWith(p+'pic')){
     if(!blacklist_words.includes(message.content.split(' ')[1])){
    GImgs.imgSearch(message.content.split(' ')[1],message.channel)
    if(message.content.split(' ').length>2){
      message.channel.send('Only first argument is taken care off')
    }
     }
    else{
      message.channel.send("please don't search for bad stuff")
    }
  }
  if(message.content==p+'meme'){
    meme.meme(message,message.channel)
  }
 if(message.content.startsWith(p+'webdev')==true){
   if(message.channel.guild.id==='537635453608656897'){
   let role = '752537094521487370'
   const roles = message.guild.members.cache.get(message.author.id)._roles
   if(!roles.some(x=>x===role)){
     message.member.roles.add([role],'')
     .then(x=>message.channel.send('added successfully'))
     .catch(x=>console.log(x))
   }
   else{
     message.member.roles.remove([role],'')
     .then(x=>message.channel.send('removed successfully'))
     .catch(x=>console.log(x))
   }
   }
 }
 if(message.content.startsWith(p+'cipher')==true){
   let send=[]
   for(let i = 0;message.content.split(' ').length>i;i++){
    if(i!=0)send.push(message.content.split(' ')[i])
   }
 //  console.log('I am working')
   //message.channel.send('cmd is working')
   cipher.cipher(message.channel,send.join(' '))
  }
  if(message.content.startsWith(p+'weather')){
    if(message.content.split(' ').length==2){
      w.weather(message.content.split(' ')[1],message.channel)
    }
    else message.channel.send('The arguments length to `-w` command should be 1')
  }
   if(message.content==p+'dog')dog.dog(message.channel)
   
   
  if(message.content.startsWith(p+'breed')==true){
      let msg=[]
      for(let i= 0;i < message.content.split(' ').length;i++){
        if(i!=0)msg.push(message.content.split(' ')[i])
      }
      breed.breed(message.channel,msg.reverse().join('/').toLowerCase())
      
    }
      
  if(message.content==p+'cat')cat.cat(message.channel)
  if(message.content.startsWith(p+'warn')==true){
        if (message.member.hasPermission("KICK_MEMBERS")){
     const mod = message.author;
    const cmdArguments = message.content.split(' ')
    let reason=[]
    
    for(let i = 0 ; i<cmdArguments.length;i++){
      if(i!=0&&i!=1){
        reason.push(cmdArguments[i])
      }
    }
    if(reason.length==0){
      reason.push('No reason specified')
    }
    const user = message.mentions.users.first();
    if(mod!=user){
        const warnEmbed = new Discord.MessageEmbed()
      .setColor("#FFA500")
      .setTitle("You have been warned")
      .addFields(
        {
          name: "Event:",
          value: `${mod} has issued a warning to you.`,
        },
        {
          name: "Reason:",
          value:reason.join(' '),
        }
      )
      .setFooter("Read the rules and behave nicely :)");
    user.send(warnEmbed).catch((err) => console.log(err));
  }
  else{
    message.channel.send('Dude you can\'t warn yourself stop wasting my time')
  }
        }
  else{
   let  mod=message.author.tag
    message.channel.send('@'+mod+' you can\'t warn lol')
  }
  
  }
  if(message.content===p+'help'){
   help.help(message.channel)
  }/*
  if(message.content.startsWith(p+'prefix')==true){
   p=message.content.split(' ')[1]
   message.channel.send('prefix changed to '+p)
  }*/
  if (message.content.startsWith(p+'delete') == true) {
if(message.channel.guild.id==795567646677925899){
           let a = message.content.split(' ')
          let num = parseInt(a[1])
            message.channel.messages.fetch()
               .then(function(){
                    message.channel.bulkDelete(num+1);
                })
              .catch(function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})               
        }

else if(message.channel.guild.id==798636169532801074){
           let a = message.content.split(' ')
          let num = parseInt(a[1])
            message.channel.messages.fetch()
               .then(function(){
                    message.channel.bulkDelete(num+1);
                })
              .catch(function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})               
        }
        
else{       if (message.member.hasPermission("KICK_MEMBERS")) {
          let a = message.content.split(' ')
          let num = parseInt(a[1])
            message.channel.messages.fetch()
               .then(function(){
                    message.channel.bulkDelete(num+1);
                })
              .catch(function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})               
        }
        else{
          message.channel.send("You don't have perms stop wasting mine and your time [NO OFFENSE]")
        }}
    }
    
    
  if (message.content === p+"clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.messages.fetch()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }
    
    
    
//kick command 

  if(message.content.startsWith(p+'kick')==true){
    if (!message.member.hasPermission("KICK_MEMBERS"))
    {message.channel.send('You are not a mod you wasted my time :(')}
    
else{
  const user = message.mentions.users.first();
    if (user) {

      const member = message.guild.member(user);

      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');

            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }}

if(message.content.startsWith(p+'mute')==true){
    if(message.member.hasPermission("KICK_MEMBERS")){
          if(message.channel.guild.id==='819691022333509672'){
      let role = '822918216938422283'
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          const roles= member._roles
          if(!roles.some(x=>x===role)){
        member.roles.add([role],'')
        .then(x=>message.channel.send('Muted successfully'))
        .catch(x=>console.log(x))
      }
      else{
          member.roles.remove([role],'')
        .then(x=>message.channel.send('Unmuted successfully'))
        .catch(x=>console.log(x))
      }
    }
  }
    }
    else if(message.channel.guild.id==='798636169532801074'){
       let role = '829355301882560512'
        const user = message.mentions.users.first();
    if (user) {
      console.log(user)
      const member = message.guild.member(user);
      const roles= member._roles
      if(!roles.some(x=>x===role)){
     member.roles.add([role],'')
     .then(x=>message.channel.send('Muted successfully'))
     .catch(x=>console.log(x))
   }
   else{
      member.roles.remove([role],'')
     .then(x=>message.channel.send('Unmuted successfully'))
     .catch(x=>console.log(x))
   }
   
    }
   }
   else{
      message.channel.send('You have purely wasted my time , go do something productive [-][-]')
    }
}










//Ban Command  
  if(message.content.startsWith(p+'ban')==true){
    if (!message.member.hasPermission("BAN_MEMBERS")){message.channel.send('You are not a mod you wasted my time :(')}
    
else{
  const user = message.mentions.users.first();
    if (user) {

      const member = message.guild.member(user);

      if (member) {
        member
          .ban('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully Banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');

            console.error(err);
          });
      } else { 
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }}
}}} );

client.login(process.env.token)
