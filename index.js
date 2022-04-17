const fetch = require('node-fetch');

let fetchcmd = async (message, args, client, _, __) => {
  const url = args.join("/")
  if(!url) return message.reply("`Give me an URL to fetch`");

  let res = await fetch(url);
  let data = await res.text()
  message.reply(`\`\`\`${data}\`\`\``);
}

module.exports.fetchcmd = fetchcmd
