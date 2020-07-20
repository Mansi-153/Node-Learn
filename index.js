const express  = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(app);
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  