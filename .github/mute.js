//     Exportamos los datos necesarios
modules.exports( (client, message, args) => {
// Creamos la condicional del commando
   if(command === 'mute'){ 

//  Declaramos el "usuario" / "usuario mencionado"
    let usuario = message.mentions.members.first();
    if(!message.member.hasPermission("MANAGE_GUILD")){ // En caso el usuario no pueda editar el servidor
      message.channel.send("❌ No puedes usar este commando!")//    da un "error"
      
    }else if(!usuario){ // En caso no mencione a otro usuario
      message.channel.send("❌ No mencionaste a un usuario!")
      
    }else if(args.join(' ') < 1){ // Si no coloco una razon para mutearlo
    message.channel.send("❌ No colocaste una razon de muteo!")
      
    }else if(usuario.roles.cache.has(' [MUTE ROLE ID] ')){ // Si el usuario ya tiene el rol o no funcionara el muteo
      message.channel.send("⚠️ No puedo mutear a el usuario!")
      
    }else{ // En caso cumpla con todos los requisitos 
    usuario.roles.add(' [MUTE ROLE ID] '); // Añadir el rol
      message.channel.send(`🤐 ${usuario.user.name} ha sido muteado`)
    }
  }
});

//       *NOTA:  Remplazar  " [MUTE ROLE ID] "  con el ID del rol a dar
