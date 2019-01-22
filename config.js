module.exports = {
  endpointBase: 'https://api.instagram.com/oauth/authorize/?client_id={CLIENTID}&redirect_uri={REDIRECTURI}&response_type=token',
  clientId: 'XXXXXXXXXXXXXXX',
  redirectUri: 'http://localhost:8989/receiveToken'
};