const https = require('https');

function getHTML(options, callback) {

  https.get(options, (res) => {
    var content = '';
    res.setEncoding('utf8');

    res.on('data', (data) => {
      content += data;
    });

    res.on('end', () => {
      callback(content);
      console.log('Response stream complete.');
    });
  });
}

module.exports = getHTML;
