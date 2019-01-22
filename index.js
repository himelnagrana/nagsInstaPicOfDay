'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const axios = require('axios');
const config = require('./config');

const server = Hapi.server({
    port: 8989,
    host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    var queryString = config.endpointBase
                        .replace('{CLIENTID}', config.clientId)
                        .replace('{REDIRECTURI}', config.redirectUri);

    return h.redirect(queryString);
  }
});

server.route({
  method: 'GET',
  path: '/receiveToken',
  handler: (request, h) => {
    return h.file('./token.html');
  }
});

server.route({
  method: 'GET',
  path: '/showPic',
  handler: (request, h) => {
    //return h.file('./token.html');
    return "pic received!";
  }
});

const init = async () => {
    await server.start();
    await server.register(Inert);
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();