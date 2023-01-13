import { Client, Events, ActivityType, GatewayIntentBits } from 'discord.js'
import { bot } from '..';


export const teste =  bot.on("ready", () => {
    console.log(`Vendo O Mitinho! Reizinho da Ironia ${bot.user.tag}!`);
  
    bot.user.setActivity("Titio Orochinho", {
      type: ActivityType.Watching,
    });
  })