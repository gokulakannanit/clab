//Install express server
const port = 4000;
const express = require('express');
const compression = require('compression')
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const app = express();

app.use(compression());

app.use("/", expressStaticGzip(path.join(__dirname + '/dist/clab'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    setHeaders: function (res, path) {
       res.setHeader("Cache-Control", "public, max-age=31536000");
    }
 }));

app.get('/*', function(req,res) {
    res.set('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'public, max-age=31536000'); 
    res.sendFile(path.join(__dirname+'/dist/clab/index.html'));
});

app.listen(process.env.PORT || port);