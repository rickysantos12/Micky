const commando = require('discord.js-commando');
const discord = require('discord.js');

class BotCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'botinfo',
            group: 'regular',
            memberName: 'botinfo',
            description: 'Tells you about me!'
        });
    }

    async run(message, args)
    {
        let picture = this.client.user.displayAvatarURL;
        let myBot = new discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("0ED4DA")
        .setThumbnail(picture)
        .setImage('https://cdn.discordapp.com/attachments/584934883109896196/587083106524069908/fhjerhgtier.png')
        .addField("Bot Name", this.client.user.username)
        .addField("Bot Create Date", this.client.user.createdAt)
        .addField("Servers", this.client.guilds.size)
        .addField("Creators", "Ricky#7003 and mitch#6969")
        .setFooter('Suggest your future!')

        message.channel.sendEmbed(myBot);
    }
}

module.exports = BotCommand;