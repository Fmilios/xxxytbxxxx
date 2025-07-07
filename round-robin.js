// /netlify/functions/round-robin.js

let counter = 0; // reinicia a cada deploy/restart; para produção, usar Redis ou KV

const attendants = [
  "https://wa.me/5544988043222",
  "https://wa.me/5535999543246",
  "https://wa.me/5537933002836"
];

exports.handler = async function(event, context) {
  const nextIndex = counter % attendants.length;
  counter++;

  const redirectUrl = attendants[nextIndex];

  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl
    },
    body: ""
  };
};
