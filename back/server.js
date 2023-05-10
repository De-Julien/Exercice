// importation des modules
const http = require('http');
//const dotenv = require('dotenv');

// importation de la route app
const app = require('./app');

const port = 5000;

// la méthode createserver prend en argument la fonction qui sera appelée à chaque requête reçue
const server = http.createServer(app);

// le serveur écoute les requêtes sur le port
server.listen(port, () => console.log('le serveur et co'));