
const client = require('./client');

async function init(){
    await client.lpush("messages", 11);
    await client.lpush("messages", 34);
    await client.lpush("messages", 56);
    await client.lpush("messages", 98);

    const result = await client.rpop("messages");
    console.log("result", result);
}
init();
