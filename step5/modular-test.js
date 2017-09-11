const getAndPrint = require('./http-functions');
const getHTML = getAndPrint.getHTML;


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, getAndPrint.printHTML);