const express = require('express');
const morgan = require('morgan');
const app = express();

const layout = require('./views/layout');
const { db, Page, User } = require('./models');

const staticMiddleware = express.static(__dirname + '/public');

app.use(morgan('dev'));
app.use(staticMiddleware);
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(layout());
});

const PORT = 1330;
const init = async () => {
  await db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  });
};

init();
