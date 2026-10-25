const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('Server Rendi Online!'));
const server = app.listen(process.env.PORT || 3000);
const peerServer = ExpressPeerServer(server, { debug: true, path: '/myapp' });
app.use('/myapp', peerServer);
