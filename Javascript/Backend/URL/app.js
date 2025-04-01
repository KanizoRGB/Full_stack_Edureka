//URL Module_ Built in module hence no need to install
//require("modulename")

const url = require('url'); //Import the module

const myUrl = url.parse('https://www.amazon.com/home')
console.log(myUrl)