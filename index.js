import { IntentsBitField } from "discord.js";
import { Client } from "discord.js";

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages],
});

client.once("ready", (client) => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  await Promise.all([oldMessage.fetch(), newMessage.fetch()]);
  await newMessage.channel.send(
    `${newMessage.author} edited message ${newMessage.url} from\n\`\`\`\n${oldMessage.content}\n\`\`\`to\n\`\`\`\n${newMessage.content}\n\`\`\``,
  );
});

client.on("messageDelete", async (message) => {
  await message.channel.send(
    `${message.author} deleted the following message from ${message.channel}:\n\`\`\`\n${message.content}\n\`\`\``,
  );
});

client.on("messageCreate", async (message) => {
  await message.fetch();
});

client.login(process.env.BOT_TOKEN);
