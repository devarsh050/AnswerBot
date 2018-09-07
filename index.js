const botconfig=require("./botconfig.json");
const Discord=require("discord.js");
const CLEAR_MESSAGES= '%clear'
const bot=new Discord.Client({disableEveryone:true});


bot.on("ready",async()=>{
    console.log(`${
        bot.user.username
    } online`)
    bot.user.setActivity(`%help | `,{
        type:"PLAYING"
    })
})     
    bot.on("message",async message=> {
        let prefix= botconfig.prefix
        let messageArray= message.content.split(" ")
        let cmd= messageArray[0]
        let args= messageArray.slice(1)
        if(cmd===`${
            prefix
        }serverinfos`){                                       /**Début de la commande servinfos */
            let icon= message.guild.iconURL
            let enbedi= new Discord.RichEmbed()
            .setDescription("Informations")
            .setColor("#7C0000")
            .setThumbnail(icon)
            .addField("Name of server:", message.guild.name)
            .addField("ID:", message.guild.id)
            .addField("Region:", message.guild.region)
            .addField("Owner:", message.guild.owner.user.username)
            .addField("Member Count:", message.guild.memberCount)
            .addField("Create At:", message.guild.createdAt);
            return message.channel.send(enbedi)

        }
        if(cmd===`${
            prefix
        }help`){                                            /**Début de la commande help */
        let enbedh= new Discord.RichEmbed()
        .setDescription("Bot Command")
        .setColor("#7C0000")
        .addField("Prefix", (prefix))
        .addField("Utility:", ("`serverinfos | botinfos | ping | avatar | invite | support`"))
        .addField("Moderator", ("`kick | ban | mute | subzero`"))
        .addField("Funny:", ("`hug | punch | kiss | flipcoin | say`"));
        return message.channel.send(enbedh)
        }
        if(cmd===`${
            prefix
        }botinfos`){                                        /**Début de la commande botinfos */
            let icon= bot.user.displayAvatarURL
            let enbedb= new Discord.RichEmbed()
            .setDescription("Informations Bot")
            .setColor("#7C0000")
            .setThumbnail(icon)
            .addField("Name of bot:", bot.user.username)
            .addField("Owner:", ("Rycek"))
            .addField("When bot join:", message.guild.joinedAt);
            return message.channel.send(enbedb)
        }
        if(cmd===`${
            prefix
        }invite`){                                          /**Début de ma commande invite */
            let enbedin= new Discord.RichEmbed()
            .setDescription("Invitation of bot")
            .setColor("#7C0000")
            .addField("https://discordapp.com/oauth2/authorize?client_id=484074905848250379&scope=bot&permissions=8", ("Enjoy :D"));
            return message.channel.send(enbedin)
        }
        if(cmd===`${
            prefix
        }support`){                                        /**Début de la commande support */
            let enbeds= new Discord.RichEmbed()
            .setDescription("If you need help or have question go here")
            .setColor("#7C0000")
            .addField("https://discord.gg/JzXpKXW", ("https://discord.gg/FM8nzuY"));
            return message.channel.send(enbeds)
        }
        if(cmd===`${
            prefix
        }ping`){
            
            const m = await message.channel.send("Ping?");
            m.edit(`Pong! Latency of the server is ${m.createdTimestamp - message.createdTimestamp}ms.`);
          }
        if(cmd===`${
            prefix
        }avatar`){                                          /**Début de la commande avatar */
            if(args[0]){
                let user= message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                if(!user) return message.reply("can\'t find user")
                let enbedb= new Discord.RichEmbed()
                .setDescription(`Avatar of ${user}`)
                .setColor("#7C0000")
                .setImage(user.user.displayAvatarURL)
                return message.channel.send(enbedb)
            }

            let enbedpp= new Discord.RichEmbed()
            .setDescription("Your avatar")
            .setColor("#7C0000")
            .setImage(message.author.displayAvatarURL)
            return message.channel.send(enbedpp)
        }
          if(cmd===`${
            prefix
        }zgegnoir`){
            let enbedyy= new Discord.RichEmbed()
            .setDescription("Zizi nwar")
            .setColor("#7C0000")
            return message.channel.send(enbedyy)
        }
        if(cmd===`${
            prefix
        }clear`){
            // This command removes all messages from all users in the channel, up to 100.
            
            const deleteCount = parseInt(args[0], 10);
            
            
            if(!deleteCount || deleteCount < 2 || deleteCount > 100)
              return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
            
            
            const fetched = await message.channel.fetchMessages({limit: deleteCount});
            message.channel.bulkDelete(fetched)
              .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
          }
          if(cmd===`${
            prefix
        }ban`){
            
            if(!message.member.roles.some(r=>["Deeper"].includes(r.name)) )
              return message.reply("Sorry, you don't have permissions to use this!");
            
            let member = message.mentions.members.first();
            if(!member)
              return message.reply("Please mention a valid member of this server");
            if(!member.bannable) 
              return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "No reason provided";
            
            await member.ban(reason)
              .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
            message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
          }
          if(cmd===`${
              prefix
          }kick`){
            
            if(!message.member.roles.some(r=>["Deeper"].includes(r.name)) )
              return message.reply("Sorry, you don't have permissions to use this!");
            
            
            let member = message.mentions.members.first() || message.guild.members.get(args[0]);
            if(!member)
              return message.reply("Please mention a valid member of this server");
            if(!member.kickable) 
              return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
            
            
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "No reason provided";
            
            
            await member.kick(reason)
              .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
        
          }
          if(cmd===`${
              prefix
          }say`){
            const sayMessage = args.join(" ");

            message.delete().catch(O_o=>{}); 

            message.channel.send(sayMessage);
          }

        });
      bot.login("NDg0MDc0OTA1ODQ4MjUwMzc5.DmhVRQ.Dc3zyX1zf1-D_4vADlP_rn23EVU");