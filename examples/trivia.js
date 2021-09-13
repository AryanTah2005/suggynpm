const suggy = require("suggy")

module.exports = {
   name: "trivia",
   description: "Play trivia with Select Menu",
   run: async (client, message, args) => {


suggy.trivia(message, {
    placeholder: "Choose...", //Default: "Choices..."
    time: 30 //In seconds, Default: 60
})
      }
   }
