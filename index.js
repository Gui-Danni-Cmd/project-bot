import { Client, Events, GatewayIntentBits } from 'discord.js'
import * as dotenv from 'dotenv'
dotenv.config()

const bot = new Client({ intents: [GatewayIntentBits.Guilds] })

bot.once(Events.ClientReady, start => {
    console.log(`Estou On ${start.user.tag}`)
})

bot.login(process.env.TOKEN)