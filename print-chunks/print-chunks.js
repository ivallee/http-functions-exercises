const https = require('https');

function getAndPrintHTMLChunks () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (res) => {
    var content = '';
    res.setEncoding('utf8');

    res.on('data', (data) => {
      content += data;
    });

    res.on('end', () => {
      console.log('Response stream complete.');
    });
  });
}
module.exports = getAndPrintHTMLChunks;
console.log(getAndPrintHTMLChunks());