const https = require('https');


const getAndPrint = {

  printHTML: (html) => {
    console.log(html);
  },

  getHTML: (options, callback) => {

    https.get(options, (res) => {
      var content = '';
      res.setEncoding('utf8');

      res.on('data', (data) => {
        content += data;
      });

      res.on('end', () => {
        getAndPrint.printHTML(content);
        console.log('Response stream complete.');
      });
    });

  }
};

module.exports = getAndPrint;
