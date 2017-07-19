const next = require('next');
const express = require('express');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const PORT = 8080;

const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
    const server = express();

    server.use(express.static('static'));

    server.use('/', routes); // handle non-standart requests

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, (err) => {
        if (err) throw err;
        if (dev) console.log(`> Ready on http://localhost:${PORT}`);
    });
});