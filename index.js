import { Client, Events,ActivityType  ,GatewayIntentBits } from 'discord.js'
import * as dotenv from 'dotenv'
dotenv.config()

export const bot = new Client({ intents: [GatewayIntentBits.Guilds] })

bot.once(Events.ClientReady, start => {
    console.log(`Estou On 🚀🚀${start.user.tag}`)
})


bot.on("ready", () => {
    console.log(`Vendo O Mitinho! Reizinho da Ironia ${bot.user.tag}!`);
  
    bot.user.setActivity("Titio Orochinho", {
      type: ActivityType.Watching,
    });
  })
bot.login(process.env.TOKEN)