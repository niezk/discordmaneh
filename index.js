const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'P ke bot',
  },
  {
    name: 'test',
    description: 'testaja bang',
  },
];

const rest = new REST({ version: '10' }).setToken("MTA4NTU2NzkwMTYxMzk0ODk5OA.GQ8KHH.4vkJQmmY4jZu1P_c2Hg7hPtZ-bC7Q5PbX9awv0");

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1085567901613948998"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();


const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`${client.user.tag} Telah aktif!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Halo Masbloo!');
  }
  if (interaction.commandName === 'test') {
    await interaction.reply("Berhasil MasBlo")
  }

  
});




client.login("MTA4NTU2NzkwMTYxMzk0ODk5OA.GQ8KHH.4vkJQmmY4jZu1P_c2Hg7hPtZ-bC7Q5PbX9awv0");