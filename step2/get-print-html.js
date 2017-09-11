const https = require('https');

function getAndPrintHTML () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (res) => {
    var content = '';
    res.setEncoding('utf8');

    res.on('data', (data) => {
      content += data;
    });

    res.on('end', () => {
      console.log(content);
      console.log('Response stream complete.');
    });
  });
}

module.exports = getAndPrintHTML;
console.log(getAndPrintHTML());