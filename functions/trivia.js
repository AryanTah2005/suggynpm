const Discord = require("discord.js")
const fetch = require("node-fetch")
const atob = require("atob")
const cap = require("capitalize-first-letter")

async function trivia(message, options = {}) {
    try {
        
        
  if(!message.channel) throw new Error('[ Suggy NPM ] • Message/Interaction option provided was invalid.');     
        
  let q = await fetch("https://opentdb.com/api.php?amount=1&type=multiple&encode=base64")
  .then(res => res.json())
 
  let qu = q.results[0].incorrect_answers
  let ans = atob(q.results[0].correct_answer);
  
  let arr = [];
   let ran = Math.floor((Math.random() * 4) + 1)
  
   let arb = [];
   
   if(ran === 1) {
    arr.push(ans, atob(qu[0]), atob(qu[1]), atob(qu[2]))
   arb.push("SUCCESS", "SECONDARY", "SECONDARY", "SECONDARY")   
   }
   
   if(ran === 2) {
       arr.push(atob(qu[0]), ans, atob(qu[1]), atob(qu[2]))
      arb.push("SECONDARY", "SUCCESS", "SECONDARY", "SECONDARY") 
   }
   if(ran === 3) {
    arr.push(atob(qu[0]), atob(qu[1]), ans, atob(qu[2]))
    arb.push("SECONDARY", "SECONDARY", "SUCCESS", "SECONDARY")
   }  
   if(ran === 4) {
   arr.push(atob(qu[0]), atob(qu[1]), atob(qu[2]), ans)
    arb.push("SECONDARY", "SECONDARY", "SECONDARY", "SUCCESS")   
   }   
     
   let emo_a = options.emoji_a || "🇦"
   let emo_b = options.emoji_b || "🇧"
   let emo_c = options.emoji_c || "🇨"
   let emo_d = options.emoji_d || "🇩"
    
   let ch = [ emo_a, emo_b, emo_c, emo_d ]
   
   let type = options.type;
   if(!["BUTTON", "SELECT_MENU"].includes(type)) throw new Error("Invalid type was provided! It should be BUTTON or SELECT_MENU")
    
  if(type === "BUTTON") {
   let b1 = new Discord.MessageActionRow().addComponents(
   new Discord.MessageButton() 
      .setStyle("SECONDARY")
      .setEmoji(ch[0])
      .setCustomId(arr[0]),
    new Discord.MessageButton() 
      .setStyle("SECONDARY")
      .setEmoji(ch[1])
      .setCustomId(arr[1]),
    new Discord.MessageButton() 
      .setStyle("SECONDARY")
      .setEmoji(ch[2])
      .setCustomId(arr[2]),
    new Discord.MessageButton() 
      .setStyle("SECONDARY")
      .setEmoji(ch[3])
      .setCustomId(arr[3])
      )
   
   let quest = arr.map((i, v) => {
      return `${ch[v]} *${i}*`
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
 
 if(!message.author) {
     
  message.reply({
      embeds: [kow],
      components: [b1]
    }).catch(() => {
    message.followUp({
      embeds: [kow],
      components: [b1]
        })
  })
     
     isdoing = true;
     
    const collector = await message.channel.createMessageComponentCollector({
      type: "BUTTON",
      max: 1,
      time: options.time * 1000 || 15000
   }) 
   
   collector.on("collect", async (i) =>{
    i.deferReply();
    if(i.user.id !== message.user.id) return i.followUp({
    content: options.blockmsg || "**You can only interact to this Select Menu by entering the command with your own**",
    ephemeral: true
    })
   
if(i.customId === ans) {
      i.followUp({
          embeds: [yes]
      })
    
    let rr = ran - 1;  
 b1.components[rr].setStyle("SUCCESS")
 b1.components[0].setDisabled(true) 
  b1.components[1].setDisabled(true) 
 b1.components[2].setDisabled(true)   
    b1.components[3].setDisabled(true) 
 
    message.editReply({
    components: [new Discord.MessageActionRow().addComponents(b1.components)]
   })
  } else {
    i.followUp({
        embeds: [no] 
      })
  let rr = ran - 1;  
 b1.components[rr].setStyle("SUCCESS")
 b1.components[0].setDisabled(true) 
  b1.components[1].setDisabled(true) 
 b1.components[2].setDisabled(true)  
 b1.components[3].setDisabled(true) 
      
   message.editReply({
   components: [new Discord.MessageActionRow().addComponents(b1.components)]  
    })
  
   }
    })
     
  collector.on("end", (i, r) =>{
    if(r === "time") {
  message.channel.send({
         embeds: [time]
     })
   
     let rr = ran - 1;  
 b1.components[rr].setStyle("SUCCESS")
 b1.components[0].setDisabled(true) 
  b1.components[1].setDisabled(true) 
 b1.components[2].setDisabled(true)  
 b1.components[3].setDisabled(true) 
        message.editReply({
     components: [new Discord.MessageActionRow().addComponents(b1.components)]
        })
    }  
  })   
     } else {       
         
  let msg = await message.channel.send({
      embeds: [kow],
      components: [b1]
    })
   
    const collector = await msg.createMessageComponentCollector({
      type: "BUTTON",
      max: 1,
      time: options.time * 1000 || 15000
   }) 
   
   collector.on("collect", async (i) =>{  
    i.deferReply();
    if(i.user.id !== message.author.id) return i.followUp({
    content: options.blockmsg || "**You can only interact to this Select Menu by entering the command with your own**",
     ephemeral: true
    })
   
if(i.customId === ans) {
      i.followUp({
          embeds: [yes]
      })
      
     let rr = ran - 1;  
 b1.components[rr].setStyle("SUCCESS")
 b1.components[0].setDisabled(true) 
  b1.components[1].setDisabled(true) 
 b1.components[2].setDisabled(true)  
 b1.components[3].setDisabled(true) 
    msg.edit({
    components: [new Discord.MessageActionRow().addComponents(b1.components)]
   })
  } else {
    i.followUp({
        embeds: [no],
      })
       
       let rr = ran - 1;  
 b1.components[rr].setStyle("SUCCESS")
 b1.components[0].setDisabled(true) 
  b1.components[1].setDisabled(true) 
 b1.components[2].setDisabled(true)  
 b1.components[3].setDisabled(true) 
      
     msg.edit({
   components: [new Discord.MessageActionRow().addComponents(b1.components)]
    })  
   }
    })
     
  collector.on("end", (i, r) =>{
    if(r === "time") {
    i.followUp({
         embeds: [time]
     })
         let rr = ran - 1;  
 b1.components[rr].setStyle("SUCCESS")
 b1.components[0].setDisabled(true) 
  b1.components[1].setDisabled(true) 
 b1.components[2].setDisabled(true)  
 b1.components[3].setDisabled(true) 
     msg.edit({
     components: [new Discord.MessageActionRow().addComponents(b1.components)]
        })
    }  
  })
     }
    }
    
    
    
if(type === "SELECT_MENU") {
let row = (boo) => [
    new Discord.MessageActionRow().addComponents(
  new Discord.MessageSelectMenu()   
  .setPlaceholder(options.placeholder || "Choices...")
  .setCustomId("trivia")
   .setDisabled(boo) 
   .addOptions(
    arr.map((i, v) =>{
     return {
      label: `${i}`,
      value: `${i}`,
      emoji: ch[v]
     }
   })
  )
  )
    ]

 
  let quest = arr.map((i, v) => {
      return `${ch[v]} *${i}*`
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
  
  if(!message.author) {
  message.reply({
      embeds: [kow],
      components: row(false)
    }).catch(() => {
    message.followUp({
      embeds: [kow],
      components: row(false)
        })  
  })
     
   const collector = await message.channel.createMessageComponentCollector({
      max: 1,
      time: options.time * 1000 || 15000
   }) 
   
   collector.on("collect", async (i) =>{
    i.deferReply();
    if(i.user.id !== message.user.id) return i.followUp({
    content: options.blockmsg || "**You can only interact to this Select Menu by entering the command with your own**",
     ephemeral: true
    })
   
if(i.values[0] === ans) {
      i.followUp({
          embeds: [yes]
      })
      
      message.editReply({
    components: row(true)
   })
  } else {
      i.followUp({
        embeds: [no],
      })
     message.editReply({
   components: row(true)
    })
  }   
    
    })
    
collector.on("end", (i, r) =>{
    if(r === "time") {
    i.followUp({
         embeds: [time]
     })
     message.editReply({
     components: row(true)
        })
    }  
  })  
    
      
  } else {
  
  let msg = await message.channel.send({
   embeds: [kow],
   components: row(false)
  })
  
  let collector = await msg.createMessageComponentCollector({
      max: 1,
      time: options.time * 1000 || 15000 
  })  
  
 collector.on("collect", async (i) =>{
  if(i.user.id !== message.author.id) return i.reply({
    content: options.blockmsg || "You can only interact to this interaction by entering the command with your own",
    ephemeral: true
    })
     
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
   }   
 } catch (er) {
     throw er;
     }
    }


module.exports = trivia;