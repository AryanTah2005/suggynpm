import { Message, TextChannel } from ("discord.js")

export declare function trivia(message: Message, options?: {
   type: string,
   emoji_a?: string,
   emoji_b?: string,
   emoji_c?: string,
   emoji_d?: string
})

export declare function rickroll(message: Message)

export declare function embedder(message: Message, channel: TextChannel)
