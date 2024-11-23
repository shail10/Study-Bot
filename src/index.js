require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js')

const {
  handleVoiceStateUpdate,
} = require('./events/voiceChannelEvents/voiceStateUpdate')

const { VOICE_STATUS_UPDATE } = require('./constants/events.constants')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

client.on(VOICE_STATUS_UPDATE, handleVoiceStateUpdate)

client.login(process.env.BOT_TOKEN)
