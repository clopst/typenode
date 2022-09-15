import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

function main() {
  const app = express();
  const port = process.env.PORT ?? 3000;

  app.get('/', (req, res) => res.send('Express + Typescript + NodeJS = 😍'));

  app.listen(port, () => {
    console.log(`[server] server started on http://localhost:${port} ⚡`);
  });
}

main();
