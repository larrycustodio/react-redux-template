/* eslint no-console: "off" */
const server = require('./server');

const PORT = process.env.PORT || 4444;

server.listen(PORT, () => console.log(`Server is listening on localhost:${PORT}`));
