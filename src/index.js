import express from 'express';
import Eves from './evolution/server/eves';
import settings from './evolution/server/settings';

const app = express();

var PORT = process.env.PORT || 3000;

// CORS handling
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});

// Routes
app.use('/evolution', express.static(__dirname + '/evolution/client'));
app.use('/', express.static(__dirname + '/portfolio'));

app.get('/api/state', function(req, res) {
  res.status(200).send({ Eves, settings });
});
