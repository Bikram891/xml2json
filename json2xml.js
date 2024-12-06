const json2xml = require('json2xml');
const fs = require('fs');
const jsonData = {
    root:{
        name:"Kamal",
        age:29,
        city:"chennai"
    }
};

const xmlData = json2xml(jsonData);
console.log(xmlData);

fs.writeFile('d://COOKIE//JSON2XML.xml', xmlData, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File successfully written!');
    }
});
