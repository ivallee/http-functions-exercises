const https = require('https');

function printHTML (html) {
  console.log(html);
}

function getHTML (options, callback) {

  https.get(options, (res) => {
    var content = '';
    res.setEncoding('utf8');

    res.on('data', (data) => {
      content += data;
    });

    res.on('end', () => {
      printHTML(content);
      console.log('Response stream complete.');
    });
  });

}


const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

console.log(getHTML(requestOptions, printHTML));