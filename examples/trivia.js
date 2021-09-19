const suggy = require("suggy")

module.exports = {
   name: "trivia",
   description: "Play trivia with Select Menu",
   run: async (client, message, args) => {


suggy.trivia(message, {
    type: "SELECT_MENU", //Required, Options: "SELECT_MENU" or "BUTTON"
    emoji_a: ":your_emoji:",
   emoji_b: ":your_emoji:",
   emoji_c: ":your_emoji:",
   emoji_d: ":your_emoji:", //Default: regional_indicator
    placeholder: "Choose...", //Default: "Choices..."
    time: 30 //In seconds, Default: 60
})
      }
   }
