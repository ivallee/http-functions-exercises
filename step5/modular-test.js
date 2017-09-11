const getAndPrint = require('./http-functions');
const getHTML = getAndPrint.getHTML;
const printHTML = getAndPrint.printHTML;


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, getAndPrint.printHTML);