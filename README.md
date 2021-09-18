<p align=center>
   <img src="https://raw.githubusercontent.com/Sugger25e/suggynpm/main/src/icon.png" alt=icon height=128px width=128px>
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

## Changelog
Changelog can be found [here](https://github.com/Sugger25e/suggynpm/blob/main/changelog.md)

## 📥 Installation
```bash
npm i suggy
```
or
```bash
npm i --no-bin-links suggy
```

### Beta
```bash
npm i suggy@beta
```

## 👆 Usage
```js
const suggy = require("suggy")
```
## 🔧 Examples
### Trivia
```js
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
client.on("messageCreate", async (message) =>{

  
  if(message.content.startsWith("embedder")) {
      suggy.embedder(message)
  }
})
```
![Embedder](https://raw.githubusercontent.com/Sugger25e/suggynpm/main/src/embedder.png)

### Rickroll
```js
client.on("messageCreate", async (message) =>{

  
  if(message.content.startsWith("rickroll")) {
      suggy.rickroll(message)
  }
})
```


## You can check full examples [here](https://github.com/Sugger25e/suggynpm/tree/main/examples)

## 📞 Contact
Need help, bugs or issues regarding to this package? Join our Discord Server!
   <p align=center>
    <a href="https://discord.gg/egEgFkugXW">
     <img src="https://discordapp.com/api/guilds/862268547380019210/widget.png?style=banner2">
     </a>
    </p>


## ✍️ License
License under [MIT](https://choosealicense.com/licenses/mit/). Please do not redistribute the package.
