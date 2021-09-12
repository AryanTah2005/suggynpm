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
> Trivia Command
```js
const { Client } = require("discord.js")
const suggy = require("suggy")
const client = new Client({
   intents: 32767
})

client.on("messageCreate", async (message) =>{
  if(message.content.startsWith("trivia")) {
      suggy.trivia(message)
  }
})

```

## License
[MIT](https://choosealicense.com/licenses/mit/)
