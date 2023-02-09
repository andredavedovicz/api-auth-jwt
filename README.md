<div align="center">
    <h1><img src="https://jwt.io/img/pic_logo.svg" width="40x"/>&nbsp; API &nbsp; WITH &nbsp; JSON &nbsp; WEB &nbsp; TOKENS &nbsp;<img src="https://jwt.io/img/pic_logo.svg" width="40x"/></h2>
    <p align="center">
    <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-features">Features</a>
    </p>
    
</div>

<div align="center">


## GIF REFRESH TOKEN
![Insomnia - New Document – LOGIN 2022-11-29 12-58-27 (1)](https://user-images.githubusercontent.com/88905492/215792358-f2e1761c-5e5a-4f23-85ea-5eb35217b671.gif)
</div>

## 📚 Project
<p>In this Project i build an API with JSON Web Token, NodeJS, and NPM. The project consists of 4 paths and a local data with two users.</p>

<br>

## 🖥 Technologies
- NodeJS
- JSON Web Tokens
- Insomnia(<a href="./Insomnia-API">Import the JSON Insomnia Here</a>)
- NPM

<br>

## 🧾 Features

- [x] /login: if has a user in the data will return the username, it is an Administrator, and will generate an Access Token and a Refresh Token.
- [x] /refresh: will verify if has any refresh token, then a valid refresh token. If was valid then will return a  new Refresh Token and  Acess Token.
- [x] /delete: it is that user or an Admin he can delete 
- [x] /logout: to logout if the refresh token is valid.
