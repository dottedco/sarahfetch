const fetch = require('node-fetch');

let fetchcmd = async (message, args, client, _, __) => {
  const url = args[0]
  if(!url) return message.reply("`Give me an URL to fetch`");

  let res = await fetch(url);
  let data = await res.text()

  if (data.length === 0) return message.reply(`\`Couldn't fetch ${url}\``);
  if (data.length > 1000) return message.reply(`\`\`\`${data.slice(0, 996).concat('...')}\`\`\``);
  message.reply(`\`\`\`${data}\`\`\``);
}

module.exports.fetchcmd = fetchcmd
