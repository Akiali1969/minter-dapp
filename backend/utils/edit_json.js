//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join('build', 'json');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        var i = parseInt(path.parse(file).name);
        var total = i +1;
        console.log(file); 
        const filepath = `${directoryPath}/${file}`;
        const data = JSON.parse(fs.readFileSync(filepath));
        data.name = `SCOPX WARRIOR #${total}`;
        fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
        /*fs.readFile(`${directoryPath}/${file}`, (err, data) => {
            if (err) throw err;
            let student = JSON.parse(data);
            student.name = `SCOPX WARRIOR #${path.parse(file).name};`
            student.description = "Scopx Warriors is a collection of 1000 randomly generated and stylistically curated NFTs that exist on the Binance Smart Chain Blockchain. Scopx Warriors holders can participate in exclusive events such as our P2E NFT Game, NFT claims, raffles, community giveaways, and more. Remember, we all warriors.";

        });*/
    });
});