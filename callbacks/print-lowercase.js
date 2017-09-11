const getHTML = require('./http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercasegit .html'
};


function printLowerCase(html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);