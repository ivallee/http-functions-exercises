const https = require('https');

function getAndPrintHTMLChunks () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (res) => {

    res.setEncoding('utf8');

    res.on('data', (data) => {
      console.log(data + '\n');
    });

    res.on('end', () => {
      console.log('Response stream complete.');
    });
  });
}
module.exports = getAndPrintHTMLChunks;