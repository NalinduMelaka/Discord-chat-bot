require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, Permissions} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});

client.on("ready", (x) =>{
  console.log(`${x.user.tag} is running`);
  client.user.setActivity('bot is working');


  const ping = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('this is a ping command!')

  
  const hello = new SlashCommandBuilder()
  .setName('hello')
  .setDescription('this is a hello command!')

  client.application.commands.create(ping);
  client.application.commands.create(hello);
})

client.on('interactionCreate',(interaction) =>{
  if(!interaction.isChatInputCommand()) return;
  if(interaction.commandName ==='ping'){
    interaction.reply('PONG!');
  }
  if(interaction.commandName ==='hello'){
    interaction.reply('Hello!😁');
  }
})
client.login(process.env.TOKEN);