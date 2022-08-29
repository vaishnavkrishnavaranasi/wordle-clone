import express from 'express';
import path from 'path';
const app = express();
const __dirname = path.resolve();
app.use(express.static(__dirname+'/view'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+ '/index.html'));
})

app.listen(process.env.port || 3000, (req, res) => { console.log('listening on port')})