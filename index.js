const Discord = require("discord.js");
const client = new Discord.Client();

function presence(){
    client.user.setPresence({
        status:"dnd",
        activity:{
            name: " zodiaco",
            type: "LISTENING"
        }
    })
}
client.on("ready", () => {
    console.log("A jugar se ha dicho!!");
    presence();
});
const prefix = "~"
client.on("message", async(message) => {
    var usuario = message.mentions.users.first();
    var canal = message.mentions.channels.first();
    var rol = message.mentions.roles.first();
    const args = message.content.slice(prefix.length).trim().split(/ +g/);
    const command = args.shift().toLowerCase();
    const msgs = ["Hola", "Buenas", "Buenos dias"];
    var cont = message.content.toLocaleLowerCase();
    if(msgs.some(msg => cont.includes(msg))){
            message.reply("Hola :wave:");
            message.channel.send('¿Como estas?');
    }else
    if(command === 'fbi'){ 
        let razon = args.join(" ");
        if(!razon)return await message.channel.send("<:404:831618109772660756> Error | **Escribe una razon.**");
        if(!usuario) return await message.channel.send("<:404:831618109772660756> Error | **Escribe un Usuario.**")
        const FBI = new Discord.MessageEmbed().setTimestamp()
            .setAuthor("Simulator - FBI" ,"https://media.discordapp.net/attachments/831668819155746827/831669028888117258/emoji46.png")
            .setDescription("Oye "+usuario.username+", "+message.author.username+" te acusa de: \n"+razon+" \n ¿Que tienes que decir en tu contra?")
            .setFooter("FBI pedido por "+message.author.username)
            .setImage('https://media.discordapp.net/attachments/784216334665383987/794638666026319902/large.L-S-P-D.gif.9b09d49070408c067f3d5069c1794637.gif')
            .setColor("00ff8f")
        const mensaje = new Discord.MessageEmbed()
            .setColor("00ff8f")
            .setDescription("Se ha enviado una **investigacion del FBI** a **"+usuario.tag+"**")
        message.channel.send(mensaje);
        usuario.send(FBI);
  }else
  if(command === 'whats'){
        let descripcion = args.slice(1).join(' ');
        if(!descripcion) return await message.channel.send("<:404:831618109772660756> Error | **Escribe un contenido.**");
        if(!usuario) return await message.channel.send("<:404:831618109772660756> Error | **Escribe un Usuario.**")
        const WhastApp = new Discord.MessageEmbed().setTimestamp()
            .setAuthor("Fun - Whats App", "https://media.discordapp.net/attachments/831668819155746827/831679314910511134/emoji21.png")
            .setThumbnail("https://media.discordapp.net/attachments/831668819155746827/831680180602142800/notificacion.gif")
            .setColor("GREEN")
            .setDescription("```"+descripcion+"```")
            .setFooter("Whats App de "+message.author.username)
        usuario.send(WhastApp);
        const mensaje = new Discord.MessageEmbed()
            .setColor("00ff8f")
            .setDescription("Se ha enviado el **whats app** a **"+usuario.tag+"**")
        message.channel.send(mensaje);
  }else
  if(command === 'lista'){
      message.delete();
      const lista = new Discord.MessageEmbed().setTimestamp()
        .setTitle('📋 TAREAS A REALIZAR').setDescription("> 🔰 Terminar los comandos\n> 🔰 Crear comandos y opcion de premiun\n> 🔰 Terminar la pagina web\n> 🔰 Conectar la pagina con discord").setColor("YELLOW").setFooter("Tabla creada el")
      message.channel.send(lista);
  }else
  if(command === 'zodiaco'){
      const mes = args[0];
      const dia = args.slice(1).join(" ").toUpperCase();
    const acuario = new Discord.MessageEmbed()
      .setAuthor("🙞 𝔸𝕔𝕦𝕒𝕣𝕚𝕠 🙜", "https://media.istockphoto.com/vectors/zodiac-sign-horoscope-icons-vector-id463615135")
      .addField("Elemento", "🌪️  Aire",true).addField("Números de la Suerte", "4, 8, 13, 17, 22, 26", true).addField("Dia", "Domingo", true).addField("Color(es)", "> 🔵Azul\n> 🟢 Verde\n> ⚫ Negro\n\nLink to more [Here](https://www.astrology-zodiac-signs.com/es/signos-del-zodiaco/acuario/)", true).addField("Compotabilidad", "Es muy compatible con:\n**[Géminis](https://www.astrology-zodiac-signs.com/es/signos-del-zodiaco/geminis/) || [Libra](https://www.astrology-zodiac-signs.com/es/signos-del-zodiaco/libra/)**", true)
      .setFooter("Pedido por "+message.member.user.tag+" • "+dia+"/"+mes)
      .setColor("BLUE")
      .setThumbnail("https://media.discordapp.net/attachments/831668819155746827/834808057015828510/multi_usos26.png")
    const capricornio = new Discord.MessageEmbed()
        .setAuthor("🙞 ℂ𝕒𝕡𝕣𝕚𝕔𝕠𝕣𝕟𝕚𝕠 🙜", "https://media.istockphoto.com/vectors/zodiac-sign-horoscope-icons-vector-id463615135")
        .addField("Elemento", "🌍  Tierra",true).addField("Números de la Suerte", "1, 4, 8, 10, 13, 17, 19, 22, 26", true).addField("Dia", "Sábado", true).addField("Color(es)", "> :brown_circle: Marron\n> ⚫ Negro\n\nLink to more [Here](https://www.astrology-zodiac-signs.com/es/signos-del-zodiaco/capricornio/)", true).addField("Compotabilidad", "Es muy compatible con:\n**[Tauro](https://www.astrology-zodiac-signs.com/es/signos-del-zodiaco/tauro/) || [Virgo](https://www.astrology-zodiac-signs.com/es/signos-del-zodiaco/virgo/)**", true)
        .setFooter("Pedido por "+message.member.user.tag+" • "+dia+"/"+mes)
        .setColor("BROWN")
        .setThumbnail("https://media.discordapp.net/attachments/831668819155746827/834968353785249812/multi_usos26.png")
    const piscis = new Discord.MessageEmbed()
        .setAuthor("🙞 ℂ𝕒𝕡𝕣𝕚𝕔𝕠𝕣𝕟𝕚𝕠 🙜", "https://media.istockphoto.com/vectors/zodiac-sign-horoscope-icons-vector-id463615135")
        .addField("Elemento", ":ocean: Agua",true).addField("Números de la Suerte", "3, 7, 12, 16, 21, 25, 30, 34, 43, 52", true).addField("Dia", "Jueves, Lunes", true).addField("Color(es)", "> :purple_circle: Morado\n> 🟢 Verde\n\nLink to more [Here](https://www.astrology-zodiac-signs.com/es/signos-del-zodiaco/piscis/)", true).addField("Compotabilidad", "Es muy compatible con:\n**[Cáncer](https://www.astrology-zodiac-signs.com/es/signos-del-zodiaco/cancer/) || [Escorpio](https://www.astrology-zodiac-signs.com/es/signos-del-zodiaco/escorpio/)**", true)
        .setFooter("Pedido por "+message.member.user.tag+" • "+dia+"/"+mes)
        .setColor("PURPLE")
        .setThumbnail("https://media.discordapp.net/attachments/831668819155746827/834970101823832075/multi_usos27.png")
    if (!mes) return message.channel.send('Ingrese un número válido para el mes.'); 
    if (mes < '1' || mes > 12)  return message.channel.send('Ingrese un mes válido [1, 12].');
    if (!dia) return message.channel.send('Ingrese un número válido para el día.');
    if (mes === 1) {////para el mes de enero
        if (dia >= 1 && dia <= 19) return message.channel.send(capricornio);
        if (dia >= 20 && dia <= 31) return message.channel.send(acuario);
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else if (mes === 2) {////para el mes de febrero
        if (dia >= 1 && dia <= 18) return message.channel.send(acuario);
        if (dia >= 19 && dia <= 29) return message.channel.send(piscis);
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else if (mes === 3) {////para el mes de marzo
        if (dia >= 1 && dia <= 20) return message.channel.send(piscis);
        if (dia >= 21 && dia <= 31) return message.channel.send('Tu zodiaco es Aries');
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else if (mes === 4) {////para el mes de abril
        if (dia >= 1 && dia <= 19) return message.channel.send('Tu zodiaco es Aries');
        if (dia >= 20 && dia <= 31) return message.channel.send('Tu zodiaco es Tauro');
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else if (mes === 5) {////para el mes de mayo
        if (dia >= 1 && dia <= 20) return message.channel.send('Tu zodiaco es Tauro');
        if (dia >= 21 && dia <= 31) return message.channel.send('Tu zodiaco es Géminis');
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else if (mes === 6) {//para el mes de junio
        if (dia >= 1 && dia <= 20) return message.channel.send('Tu zodiaco es Géminis');
        if (dia >= 21 && dia <= 31) return message.channel.send('Tu zodiaco es Cáncer');
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else if (mes === 7) {//para el mes de julio
        if (dia >= 1 && dia <= 22) return message.channel.send('Tu zodiaco es Cáncer');
        if (dia >= 23 && dia <= 31) return message.channel.send('Tu zodiaco es Leo');
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else if (mes === 8) {//para el mes de agosto
        if (dia >= 1 && dia <= 22) return message.channel.send('Tu zodiaco es Leo');
        if (dia >= 23 && dia <= 31) return message.channel.send('Tu zodiaco es Virgo');
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else if (mes === 9) {//para el mes de septiembre
        if (dia >= 1 && dia <= 22) return message.channel.send('Tu zodiaco es Virgo');
        if (dia >= 23 && dia <= 31) return message.channel.send('Tu zodiaco es Libra');
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else if (mes === 10) {//para el mes de octubre
        if (dia >= 1 && dia <= 22) return message.channel.send('Tu zodiaco es Libra');
        if (dia >= 23 && dia <= 31) return message.channel.send('Tu zodiaco es Escorpio');
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else if (mes === 11) {//para el mes de noviembre
        if (dia >= 1 && dia <= 21) return message.channel.send('Tu zodiaco es Escorpio');
        if (dia >= 22 && dia <= 31) return message.channel.send('Tu zodiaco es Sagitario');
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else if (mes === 12) {//para el mes de diciembre
        if (dia >= 1 && dia <= 21) return message.channel.send('Tu zodiaco es Sagitario');
        if (dia >= 22 && dia <= 31) return message.channel.send(capricornio);
        return message.channel.send('Introduzca una fecha valida.');
    } 
    else {
        return message.channel.send('Introduzca una fecha valida.');
    }
  }
});
client.login('ODIxOTE3NzgxMjYyOTkxNDAw.YFKslQ.CfzKcN0FCV4PfQ3UdcUJo5spIZE')