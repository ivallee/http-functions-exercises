const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {


  https.get(options, (res) => {
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
getAndPrintHTML(requestOptions);