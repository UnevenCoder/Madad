const Discord = require('discord.js')
exports.cipher=(ab,str)=>{
 let result='',abc='abcdefghijklmnopqrstuvwxyz';
for(let i =0;i < str.length;i++){
  if(str[i].charCodeAt()<91&&str[i].charCodeAt()>=65){
if(str[i].charCodeAt()<=77){
  //console.log(result)
result+=String.fromCharCode(str.charCodeAt(i)+13);
}
if(str[i].charCodeAt()>77){
  //console.log(result+'77+')
result+=String.fromCharCode(str.charCodeAt(i) -13);
  }
  }
else if(str[i].charCodeAt()<=122&&str[i].charCodeAt()>=97){
  if(str[i].charCodeAt()<=109){
result+=String.fromCharCode(str.charCodeAt(i)+13);
}
if(str[i].charCodeAt()>109){
result+=String.fromCharCode(str.charCodeAt(i) -13);
  }
}
///if(str[i].charCodeAt()>122str[i].charCodeAt()<97&&str[i].charCodeAt()>91&&str[i].charCodeAt()<65){
   else{ result+=str[i];
  }
  
}
//console.log(result);
  let msg = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Rot-13 Cipher')
	.setAuthor('-___----_<-Encrypted->-__------_')
	.addFields(
	  { name: 'Text to Cipher', value:str, inline: true },
	  { name: 'Ciphered Text', value: result, inline: true })
	  .setTimestamp()
	  
ab.send(msg)
}