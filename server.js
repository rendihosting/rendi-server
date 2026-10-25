const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const server = app.listen(process.env.PORT || 10000);
const peerServer = ExpressPeerServer(server, {path: '/myapp'});
app.use('/peerjs', peerServer);
app.get('/', (req,res)=>res.send('Server ON bos'));
