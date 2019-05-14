const botconfig=require("./botconfig.json");
const Discord=require("discord.js");
const bot=new Discord.Client({disableEveryone:true});


bot.on("ready",async()=>{
    console.log(`Selfbot on`)                               /**Message indiquant que le bot fonctionne correctement */
});
    bot.on("message",async message=> {
        let prefix= botconfig.prefix
        let messageArray= message.content.split(" ")
        let cmd= messageArray[0]
        let args= messageArray.slice(1)
        if(cmd===`${
            prefix
        }servinfos`){                                       /**Début de la commande servinfos */
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
            message.channel.send(enbedi)

        }
        if(cmd===`${
            prefix
        }ping`){                                            /**Commande ping qui indique le ping du textuel du serveur */
            
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
                message.channel.send(enbedb)
            }

            let enbedpp= new Discord.RichEmbed()
            .setDescription("Your avatar")
            .setColor("#7C0000")
            .setImage(message.author.displayAvatarURL)
            message.channel.send(enbedpp)
        }
          if(cmd===`${
            prefix
        }zgegnoir`){                                        /** Commande inutile je sais pas pourquoi j'ai fais ça */
            let enbedyy= new Discord.RichEmbed()
            .setDescription("Zizi nwar")
            .setColor("#7C0000")
            message.channel.send(enbedyy)
        }
        if(cmd===`${
            prefix
        }epil`){                                            /**Pour faire chier les bros en mettant une image casse couille */
            let enbedz= new Discord.RichEmbed()
            .setDescription("Epileptic Gif")
            .setColor("#7C0000")
            .setImage("https://thumbs.gfycat.com/ExcitableLimpingCanadagoose-size_restricted.gif")
            message.channel.send(enbedz)
        }
        if(cmd===`${
            prefix
        }hug`){                                             /**Pour faire un gros calîn au frère */
            if(args[0]){
                let user= message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                if(!user) return message.reply("can\'t find user")
                let enbeda= new Discord.RichEmbed()
                .setDescription(`You hug ${user}`)
                .setColor("#7C0000")
                .setImage("http://i.imgur.com/tuH4gqZ.gif")
                return message.channel.send(enbeda)
            }
            let enbedc= new Discord.RichEmbed()
            .setDescription("Hug yourself wtf ?!")
            .setColor("#7C0000")
            .setImage("https://media1.tenor.com/images/29b083641129892206ee041e4b0cac1b/tenor.gif?itemid=8301730")
            return message.channel.send(enbedc)

        }
        if(cmd===`${
            prefix
        }leave`){                                          /**Pour leave un serveur rapidement */
           message.guild.leave()
        }
        if(cmd===`${
            prefix
        }help`){                                            /**Commande pour avoir la liste des differentes commandes */
            let enbedd= new Discord.RichEmbed()
            .setTitle(`**UTILS**`)
            .setDescription(`**By Ipseity**`)
            .setColor("#7C0000")
            .addField(`**servinfos**`, `Donne les informations sur le serveur`)
            .addField(`**avatar**`, `Affiche l'avatar de la personne mentionnée`)
            .addField(`**ping**`, `Donne le ping du serveur textuel`)
            .addField(`**embed**`, `Pour mettre en embed votre message`)

            let enbede= new Discord.RichEmbed()
            .setTitle(`**FUN**`)
            .setColor("#7C0000")
            .addField(`**hug**`, `Faites un gros calîn :3`)
            .addField(`**8ball**`, `Pose une question à la boule magique :D`)
            .addField(`**epil**`, `Affiche un **GIF** pour casser les couilles aux potes`)
            .addField(`**punch**`, `Tapez votre pote le plus fort possible`)

            message.channel.send(enbedd)
            message.channel.send(enbede)
        }
        if(cmd===`${
            prefix
        }8ball`){                                           /**Pose une question à la boule magique */
            if(!args[2]) return message.reply("Pose une question correcte !");
            let replies = ["Yes.", "No.", "I don't know", "Repose ta question plus tard"];

            let result = Math.floor((Math.random() * replies.length));
            let question = args.slice(1).join(" ");

            let enbedf = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("#7C0000")
            .addField("Question", question)
            .addField("Réponse", replies[result]);

            message.channel.send(enbedf)
        }
        if(cmd===`${
            prefix
        }punch`){                                               /**Commande pour frapper son pote */
            if(args[0]){
                let user= message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                if(!user) return message.reply("can\'t find user")
                let enbedg= new Discord.RichEmbed()
                .setDescription(`Tu tapes ${user}`)
                .setColor("#7C0000")
                .setImage("https://media.giphy.com/media/arbHBoiUWUgmc/giphy.gif")
                message.channel.send(enbedg)
            }
            let enbedh= new Discord.RichEmbed()
            .setDescription("Tu te tapes tout seul :thinking:")
            .setColor("#7C0000")
            .setImage("https://media1.tenor.com/images/4ac4e3869525a0ee55feda4ac42cc12b/tenor.gif?itemid=10454825")
            message.channel.send(enbedh)
        }
        if(cmd===`${
            prefix
        }embed`){                                               /**Pour mettre en embed un message */
            
            let message1 = args.slice(0).join(" ");
            let enbedj = new Discord.RichEmbed()
            .setDescription(message1)
            .setColor("#7C0000")
            message.channel.send(enbedj)
        }
        setInterval(embed)
        });
      bot.login("mfa.InbJCspBWs2aAXfvwBCBcTq3ZOo6oEnOYfNwV40nJQJ4__eue45YYPWR3b0A7ZP49vkB9Fl_M-Bmrus_dxE8");
