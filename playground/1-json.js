
const fs = require('fs');
// const book  = {
//     author :'james bowell',
//     name:'harry potter'
// }

// const json_format = JSON.stringify(book);
// console.log(json_format);

// const obj_format = JSON.parse(json_format);
// console.log(obj_format.name);

// fs.writeFileSync('1-json.json', json_format);

const dataBuffer = fs.readFileSync('1-json.json');

const BuffereddataString = dataBuffer.toString()
const data = JSON.parse(BuffereddataString);



data.planet = 'venus';
data.age = 57;


const datajson = JSON.stringify(data);
fs.writeFileSync('1-json.json', datajson);

