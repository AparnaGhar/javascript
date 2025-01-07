const fs = require('fs');

//blocking sync way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
const textOut = `this is normal text ${textIn} on ${Date.now()}`;
const tt = fs.writeFileSync('./txt/output.txt', textOut);
console.log("written");

//Non blocking sync way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);
        });
    });
});
console.log("this is start");