'user strict';

const app = require('./server');

const port = process.env.PORT || 3000;

(async () => {
  await app.listen(port);
  console.log(`Server started on port ${port}`);
})();
