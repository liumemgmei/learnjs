
const fs = require('fs');
let rawdata = fs.readFileSync('config.json');

let config = JSON.parse(rawdata);

config.files.forEach(element => {
    require(element)
});
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  if(line === 's'){
    rl.question('请输入要执行的js文件: ', name=>{
      fs.writeFileSync('config.json', JSON.stringify({...config, files: [`./${name}`]}));
    })
  }
});