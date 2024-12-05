const fs = require('fs');
const xmlbuilder = require('xmlbuilder');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

//Build xml Structure

const xml = xmlbuilder.create('note')
.ele('to','Pritish')
.up()
.ele('from', 'Vikram')             
.up()
.ele('heading', 'Reminder')
.up()
.ele('body', "Don't forget to bring my book!")
.end({ pretty: true });

//writen the xml to a file

fs.writeFile('d://COOKIE//example.xml', xml, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File successfully written!');
    }
});
////////////////////////////////////////////////////////////

// Read the XML file
fs.readFile('d://COOKIE//example.xml', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
    }else{
        console.log('File read sucessfully!')
    }
})

//convert the xml file to json

parser.parseString(xml, (err, result) => {
    if (err) {
        console.error("Error parsing XML:", err);
    }else{
    console.log("JSON Output:", JSON.stringify(result, null, 2));
    }
});
