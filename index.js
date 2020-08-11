const Discord = require('discord.js');
const meme=require('./meme.js')
const quotes = require('./quotes.js')
const tem = require('./tem.js')
const help=require('./help.js')
const client = new Discord.Client({
  fetchAllMembers: true, // Remove this if the bot is in large guilds.
  presence: {
    status: 'online',
    activity: {
      name: `to my Master patiently`,
      type: 'LISTENING'
    } 
  }
})
const queue = new Map();
const oppus = require('opusscript')
const ffmeg = require('ffmpeg-static')
const fetch = require('node-fetch');
const embed=require('./embed.js')
const discordTTS=require('./tts.js');
const ytdl = require('ytdl-core');
let p = ';'



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



client.on('message', async message => {
 if (!message.guild) return;
 // prefix 
if(message.content.startsWith(p)==true){
  
  if(message.content==p+'avatar'){message.reply(message.author.displayAvatarURL());}
  if(message.content.startsWith(p+'wiki')==true){
    if (message.content.split(' ').length<2){message.reply('Wiki search only accepts one param try again')}
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
  if(message.content==p+'meme'){
    meme.meme(message.channel)
  }
if(message.content===p+"say"){
        const voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            const stream = discordTTS.getVoiceStream("this is a test cookie");
            const dispatcher = connection.play(stream);
            dispatcher.on("finish",()=>voiceChannel.leave())
        });
    }
  if(message.content==p+'tem'){
   tem.tem(message.channel)
  }
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
  }
  if(message.content.startsWith(p+'prefix')==true){
   p=message.content.split(' ')[1]
   message.channel.send('prefix changed to '+p)
  }
  if (message.content.startsWith(p+'delete') == true) {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
          let a = message.content.split(' ')
          let num = parseInt(a[1])
            message.channel.messages.fetch()
               .then(function(){
                    message.channel.bulkDelete(num);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
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
}} );



client.login(process.env.token)
