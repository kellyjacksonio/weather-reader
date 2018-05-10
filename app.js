const   express = require('express'),
        app     = express(),
        port    = process.env.PORT || 8080,
        path    = require('path');

app.use(express.static('public'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(port, (req, res) => {
    console.log(`listening on port ${port} :)`);
});