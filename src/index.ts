import express from 'express';

function main() {
  const app = express();
  const port = 3030;

  app.get('/', (req, res) => res.send('Express + Typescript + NodeJS = 😍'));

  app.listen(port, () => {
    console.log(`[server] server started on http://localhost:${port} ⚡`);
  });
}

main();
