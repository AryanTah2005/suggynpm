const { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior, AudioPlayerStatus } = require('@discordjs/voice');
const path = require("path")

async function rickroll(message) {

	 if(!message.author){
		let member = message.guild.members.cache.get(message.user.id)
		let channel = member.voice.channel;
		if(!channel) throw new Error("[ Suggy NPM ] ‣ User is not in a voice channel")

		const connection = joinVoiceChannel({
			channelId: channel.id,
			guildId: message.guild.id,
			adapterCreator: message.guild.voiceAdapterCreator
		})

      const player = createAudioPlayer({
     behaviors: {
		noSubscriber: NoSubscriberBehavior.Pause,
	},
 });

      const resource = createAudioResource(path.join(__dirname, '../src/rickroll.mp3'));
player.play(resource); 
  connection.subscribe(player)

  player.on(AudioPlayerStatus.Idle, () => {
       connection.destroy()
}); 

	} else { 
  let channel = message.member.voice.channel;  
  if(!channel) throw new Error("[ Suggy NPM ] ‣ User is not in a voice channel")   
      
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
      
 const resource = createAudioResource(path.join(__dirname, '../src/rickroll.mp3'));
player.play(resource); 
  connection.subscribe(player)

  player.on(AudioPlayerStatus.Idle, () => {
       connection.destroy()
}); 
  }      
}

module.exports = rickroll;