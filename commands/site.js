const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    data: {
        name: 'site',
        description: 'Sitemizi ziyaret etmek için butona basın.',
    },
    async execute(interaction) {
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Sitemizi Ziyaret Edin')
            .setURL('https://cb4d546c-6cff-4093-909b-4eb0c17353ce-00-1p3avruu3tefe.spock.replit.dev/')
            .setDescription('Yetkili Başvuru Sistemi\n\n*Sunucumuzda yetkili olmak istiyorsanız yapmanız gereken aşağıdaki butona tıklayıp formu düzgün bir şekilde doldurmanız gerekiyor aksi taktirde başvurunuz reddedilebilir.*');

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setStyle('LINK')
                    .setLabel('FORM')
                    .setURL('https://cb4d546c-6cff-4093-909b-4eb0c17353ce-00-1p3avruu3tefe.spock.replit.dev/')
            );

        await interaction.reply({ embeds: [exampleEmbed], components: [row] });
    },
};
