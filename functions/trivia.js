const Discord = require("discord.js")
const fetch = require("node-fetch")
const atob = require("atob")
const cap = require("capitalize-first-letter")

async function trivia(message, options = {}) {
   if(!message.guild.me.permissions.has("EMBED_LINKS")) console.log("I don't have EMBED_LINKS permission to do this process!")


	let q = await fetch("https://opentdb.com/api.php?amount=1&type=multiple&encode=base64")
  .then(res => res.json())
 
  let qu = q.results[0].incorrect_answers
  let ans = atob(q.results[0].correct_answer);
  
  let arr = [];
   let ran = Math.floor((Math.random() * 4) + 1)
  
   if(ran === 1) {
    arr.push(ans, atob(qu[0]), atob(qu[1]), atob(qu[2]))
   }
   if(ran === 2) {
       arr.push(atob(qu[0]), ans, atob(qu[1]), atob(qu[2]))
   }
   if(ran === 3) {
    arr.push(atob(qu[0]), atob(qu[1]), ans, atob(qu[2]))
   }  
   if(ran === 4) {
   arr.push(atob(qu[0]), atob(qu[1]), atob(qu[2]), ans)
   }   
     
   let ch = ["A", "B", "C", "D"];   
       
let row = (boo) => [
    new Discord.MessageActionRow().addComponents(
  new Discord.MessageSelectMenu()   
  .setPlaceholder(options.placeholder || "Choices...")
  .setCustomId("trivia")
   .setDisabled(boo) 
   .addOptions(
    arr.map((i, v) =>{
     return {
      label: `${ch[v]}) ${i}`,
      value: `${i}`
     }
   })
  )
  )
    ]

 
  let quest = arr.map((i, v) => {
      return `${ch[v]}) *${i}*`
  }).join("\n")

  let kow = new Discord.MessageEmbed()
  .setTitle("Trivia")
    .setDescription(`${atob(q.results[0].question)}\n\n${quest}\n\n**__You have ${options.time || 15} seconds to answer the question correctly__**`)
  .addField("Category", atob(q.results[0].category))
  .addField("Difficulty", cap(atob(q.results[0].difficulty)))
  .setColor("RANDOM")
  
  let yes = new Discord.MessageEmbed()
  .setTitle("Correct")
  .setDescription(`Your answer \`${ans}\` was correct!`)
  .setColor("GREEN")
  
  let no = new Discord.MessageEmbed()
  .setTitle("Wrong")
  .setDescription(`Your answer was wrong, it was \`${ans}\``)
  .setColor("RED")
  
  let time = new Discord.MessageEmbed()
  .setTitle("Timeout")
  .setDescription(`You didn't answer in time, the correct answer is \`${ans}\``)
  .setColor("RED")
  
  
  let msg = await message.channel.send({
   embeds: [kow],
   components: row(false)
  })
  
  let filter = (i) => i.user.id === message.author.id;
  
  let collector = await msg.createMessageComponentCollector({
      filter: filter,
      max: 1,
      time: options.time * 1000 || 15000 
  })  
  
 collector.on("collect", async (i) =>{
  if(i.user.id === message.author.id) {   
     
  if(i.values[0] === ans) {
      message.channel.send({
          embeds: [yes]
      })
      
      i.update({
    components: row(true)
   })
  } else {
      message.channel.send({
        embeds: [no],
      })
     i.update({
   components: row(true)
    })
  }   
   } else {
    i.reply({
    content: `Only ${message.author.username} can use the menu!`,
   ephemeral: true
   })
   } 
  })
       
  collector.on("end", (i, r) =>{
    if(r === "time") {
     message.channel.send({
         embeds: [time]
     })
     msg.edit({
     components: row(true)
        })
    }  
  })            
}

module.exports = trivia;