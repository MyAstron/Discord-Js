const args = message.content.slice(prefix.length).trim().split(/ +g/);
  if(message.content.startsWith(prefix+'mute')){
    let usuario = message.mentions.members.first();
    if(!message.member.hasPermission("MANAGE_GUILD")){
    const perm = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#${message.member.user.discriminator} ・ ❌ Error`, message.author.avatarURL({ dynamic: true })).setTitle("> No tienes los permisos para ejecutar este comando!").setDescription("Permiso requerido: `MANAGE_GUILD`").setColor("RED").setFooter("Sintaxis: <obligatorio> [opcional]").setTimestamp()
    message.channel.send(perm)
 }
