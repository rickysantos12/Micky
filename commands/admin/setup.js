const commando = require('discord.js-commando');
const discord = require('discord.js');

class SetupCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'setup',
            group: 'regular',
            memberName: 'setup',
            description: 'Sets up the server for suggestions.'
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You dont have permission for this command. You need `ADMINISTRATOR` to use it.')

        message.delete();

        let embed = new discord.RichEmbed()
            .setAuthor(message.member.displayName,message.author.displayAvatarURL)
            .setTitle(`Hey ${message.author.tag}!`)
            .setDescription('Here is instructions step by step to know how to setup your server!')
            .addField('Step 1:', 'Create a category or a channel in any category where people will vote peoples suggestions!')
            .addField('Step 2:', 'Add the following channel called: `suggestions` in order to see suggestions.')
            .addField('Step 3:', 'Create a channel called `sumbit-suggestions` and put it in any category.')
            .addField('Step 4:', 'Edit the permission for the channel called `suggestions` and make people not `Send Messages`, allow permissions for everyone `Read Messages`, and `Read Message History`.')
            .addField('Step 5:', 'Your finished! If you have trouble, click the blue text from above and watch the video.')
            .setURL('https://youtu.be/DJ89z9gx2tk')
            .setFooter('Future your server.')
            .setThumbnail('https://img.icons8.com/plasticine/2x/settings.png')
            .setColor('BLUE')

        message.channel.send(embed)
    }
}

module.exports = SetupCommand;