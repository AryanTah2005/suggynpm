<p align=center>
   <img src="https://raw.githubusercontent.com/Sugger25e/suggynpm/main/src/icon.png" alt=icon height=128px width=128px style="border-radius:50%;">
</p>

<h1 align=center>
   Suggy
   </h1>

<p align=center>
   Suggy package provides you built-in fun, games, and utility commands for your Discord.JS Project!
</p>
  
  <p align=center>
 <img src="https://img.shields.io/npm/dt/suggy.svg" alt="Downloads"> <img src="https://img.shields.io/npm/v/suggy.svg" alt="Version"> <img src="https://img.shields.io/npm/l/suggy.svg" alt="License">
   </p>

   <p align=center>
   <a href="https://npmjs.com/package/suggy">
  <img src="https://nodei.co/npm/suggy.png" alt="NPM Package">
  </a>
   </p>

## 📥 Installation
```bash
npm i suggy
```

## Usage
```js
const suggy = require("suggy")
```
## Examples
### Trivia
```js
const { Client } = require("discord.js")
const suggy = require("suggy")
const client = new Client({
   intents: 32767
})

client.on("ready" async () =>{
  console.log("Ready!")
})

client.on("messageCreate", async (message) =>{
    if(message.content.startsWith("trivia")) {
      suggy.trivia(message, {
      placeholder: "Choose an answer", //Optional, Default: "Choices..."
      time: 30 //Optional, Default: 15 seconds
      })
  }
})

```
![Trivia](https://raw.githubusercontent.com/Sugger25e/suggynpm/main/src/trivia.png)



### Embedder [(Concept by simply-djs. Check them out!)](https://www.npmjs.com/package/simply-djs)
```js
const { Client } = require("discord.js")
const suggy = require("suggy")
const client = new Client({
   intents: 32767
})

client.on("ready" async () =>{
  console.log("Ready!")
})

client.on("messageCreate", async (message) =>{

  
  if(message.content.startsWith("embedder")) {
      suggy.embedder(message)
  }
})

```
![Embedder](https://raw.githubusercontent.com/Sugger25e/suggynpm/main/src/embedder.png)


## Looking for full examples? [Check these out!](https://github.com/Sugger25e/suggynpm/tree/main/examples)
  
   <p align=center>
    Also try my Bot!
   <a href="https://suggy.sugger25.repl.co">
   <img src="https://dcbadge.vercel.app/api/shield/bot/880696814783852584" alt="Invite my Bot!">
    </a>
  </p>

## 📞 Contact Us
Need help regarding to this package? [Join our Discord Server!](https://suggy.sugger25.repl.co/discord)


## ✍️ License
License under [MIT](https://choosealicense.com/licenses/mit/). Please do not redistribute the package.
