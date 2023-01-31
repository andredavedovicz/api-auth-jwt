# API with JSON Web Token

This Project was done API with JSON Web Token, NodeJS, and NPM. The project consists of 4 paths and a local data with two users.
/login: if has a user in the data will return the username, it is an Administrator, and will generate an Access Token and a Refresh Token.
/refresh: will verify if has any refresh token, then a valid refresh token. If was valid then will return a  new Refresh Token and  Acess Token.
/delete: it is that user or an Admin he can delete 
/logout: to logout if the refresh token is valid.

## Technologies

- NodeJS
- JSON Web Token
- Insomnia(for tests)


## GIF REFRESH TOKEN
![Insomnia - New Document – LOGIN 2022-11-29 12-58-27 (1)](https://user-images.githubusercontent.com/88905492/215792358-f2e1761c-5e5a-4f23-85ea-5eb35217b671.gif)
