const fs = require('fs');
const filepath = 'build/json/_metadata.json';
const data = JSON.parse(fs.readFileSync(filepath));
data.description = "Scopx Warriors is a collection of 1000 randomly generated and stylistically curated NFTs that exist on the Binance Smart Chain Blockchain. Scopx Warriors holders can participate in exclusive events such as our P2E NFT Game, NFT claims, raffles, community giveaways, and more. Remember, we all warriors.Scopx Warriors is a collection of 1000 randomly generated and stylistically curated NFTs that exist on the Binance Smart Chain Blockchain. Scopx Warriors holders can participate in exclusive events such as our P2E NFT Game, NFT claims, raffles, community giveaways, and more. Remember, we all warriors.";
fs.writeFileSync(filepath, JSON.stringify(data, null, 2));