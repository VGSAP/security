const cds = require('@sap/cds');
cds.on('bootstrap', app => {
  app.get('/', (_, res) => {
    res.send('Welcome to the HRService CAP App!');
  });
});
module.exports = cds.server;
