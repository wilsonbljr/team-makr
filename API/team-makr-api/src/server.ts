import { app } from './app'

const port = 3000;

const server = app.listen(port);

process.on('SIGINT', () => {
    server.close();
    console.log('API closed');
});