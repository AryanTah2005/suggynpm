async function rickroll(message) {
if(!message.member.voice.channel) return console.log(chalk.bgRed.bold("[Error] User must be in a voice channel! [Suggy NPM]"))
       if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return console.log(chalk.bgRed.bold("[Error] I'm currently in other voice channel, please try again later. [Suggy NPM]"))
 let channel = message.member.voice.channel;     
      
const connection = joinVoiceChannel({
	channelId: channel.id,
	guildId: message.guild.id,
	adapterCreator: message.guild.voiceAdapterCreator,
});  
 
 const player = createAudioPlayer({
     behaviors: {
		noSubscriber: NoSubscriberBehavior.Pause,
	},
 });
      
 const resource = createAudioResource(path.join(`${process.cwd()}/src/rickroll.mp3`));
player.play(resource); 
  connection.subscribe(player)      
   
  player.on(AudioPlayerStatus.Idle, () => {
	
  connection.destroy()
});   
}          
