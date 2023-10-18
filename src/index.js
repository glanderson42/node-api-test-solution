const app = require('./app');
const config = require('./config');

const port = config.get('port');

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
