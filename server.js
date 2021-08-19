const server = require('express');
const PORT = 3000;
const app = server();

app.use(server.static(`${__dirname}/`));

app.listen(PORT, () => {
  console.log(`server start, port: ${PORT}`);
});
