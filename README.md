# nagsInstaPicOfDay
--------------------
This is a test app to bring last posted image of user using hapi js and jquery. This app is just to check how hapi js works and nothing complex there.

- Go to https://www.instagram.com/developer/clients/manage/ and create a client with your preferred name and 'http://localhost:8989/receiveToken' as redirect url. You will get a `client_id` there, after successful creation.

- In `config.js` file of the repository replace 'XXXXXXXXXXXXXXX' with your client id
```
module.exports = {
  endpointBase: 'https://api.instagram.com/oauth/authorize/?client_id={CLIENTID}&redirect_uri={REDIRECTURI}&response_type=token',
  clientId: 'XXXXXXXXXXXXXXX',
  redirectUri: 'http://localhost:8989/receiveToken'
};
```
- Run the app by:
```
    node index.js
```

- After authentication with your instagram credential (it is needed only once) - you will see the last pic posted by you. like:
 ![](https://user-images.githubusercontent.com/1459839/51519588-9a342580-1e4b-11e9-9fe6-4d8e697064be.png)