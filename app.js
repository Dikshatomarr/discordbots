//invite link
//https://discord.com/api/oauth2/authorize?client_id=991311540454162473&permissions=277025458240&scope=bot

const Discord = require("discord.js");
const Client = new Discord.Client({ intents: ["GUILDS" , "GUILD_MESSAGES" ,"DIRECT_MESSAGES" ],
partials: [ "MESSAGE" , "CHANNEL" , "GUILD_MEMBER","USER","REACTION" ]});


Client.on("ready",() => {
    console.log( Client.user.tag + " is online.");
})

Client.on("messageCreate",(message) => { 
    if (message.author.bot ==false && (message.content=="hey"|| message.content=="hello") ){
    message.reply("Hemlo!");
    console.log(message);}

    else if (message.author.bot ==false &&  (message.content=="sup"|| message.content=="how are you?") ){
    message.reply("I'm goomd vroo! what about you?");
    console.log(message);}

    else if (message.author.bot ==false &&  (message.content=="I'm good"|| message.content=="I'm also fine " ||
    message.content=="I'm also Good"|| message.content=="I'm also Fine ") ||
    message.content=="good"|| message.content=="Good" ){
        message.reply("huehuehue!");
        console.log(message);}

    else if (message.author.bot ==false && message.content=="bye" ){
        message.reply("ok vai time to leamve");
        console.log(message);}

    else if (message.author.bot ==false && message.content=="wyd" ){
            message.reply("pamdhia limkhai kamro IAS YAS bamno");
            console.log(message);}
    
    
   });

   
   //message bot can read

Client.login(" "); //add your token here
