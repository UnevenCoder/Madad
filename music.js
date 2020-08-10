 module.exports.music = async function mus(){
    if (message.member.voice.channel) {
      console.log(message.member)
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=_jd9HAewgdY', { filter: 'audioonly' }));

    if(message.content === '|reset'){
        dispatcher.destroy()
        message.reply('Player Reset')
        console.log('Audio Player Reset by ' +author.username)
    }
dispatcher.on('start', () => {
    console.log('audio.mp3 is now playing!');
});

dispatcher.on('finish', () => {
    console.log('audio.mp3 has finished playing!');
});

// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
      
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }

