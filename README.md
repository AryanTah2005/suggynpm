# Suggy

Suggy package provides you built-in fun, games, and utility commands for your Discord.JS Project!

## Installation
```bash
npm i suggy
```

## Usage
```js
const suggy = require("suggy")
```
## Examples
> Trivia
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
      suggy.trivia(message)
  }
})

```

> Embedder
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
  
  if(message.content.startsWith("embedder")) {
      suggy.embedder(message)
  }
})

```

## License
[MIT](https://choosealicense.com/licenses/mit/)
