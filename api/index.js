const { json } = require("body-parser");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
//Users localData
const users = [
    {
        id:"1",
        username:"andre",
        password:"andre123",
        isAdmin:true,
    },
    {
        id:"2",
        username:"kaua",
        password:"kaua123",
        isAdmin:false,

    }
];
//generate access token
const GenAccessToken = (user)=>{
    return jwt.sign({id:user.id,isAdmin:user.isAdmin},"MyAccessToken",{expiresIn:"15m"}); //was used id and isAdmin for token(payload)
};
const GenRefreshToken = (user)=>{
    return jwt.sign({id:user.id,isAdmin:user.isAdmin},"MyRefreshToken",); //was used id and isAdmin for token(payload),string is the jwt name
};
//Validate login
app.post("/api/login",(req,res)=>{
    const { username,password } = req.body;
    //Verify if user are available
    const user = users.find((u=>{
        return u.username === username && u.password === password;
    }))
    if(user){
        const accessToken = GenAccessToken(user);
        const refreshToken = GenRefreshToken(user);
        refreshTokens.push(refreshToken);
        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accessToken: accessToken,
            refreshToken: refreshToken                
        });
    }else{
        res.status(400).json("Username or Password incorrect!");
    }
    
});
//create a refresh token because anyone can access with the accesstoken
let refreshTokens = [];
app.post("/api/refresh",(req,res)=>{
    //Take the refresh token from the user
    const refreshToken = req.body.token;
    //send error if there is no token or it's not valid
    if(!refreshToken){
        return res.status(401).json("You're not authenticated!");
    }if(!refreshTokens.includes(refreshToken)){
        return res.status(403).json("Refresh token is invalid!");
    }
    jwt.verify(refreshToken,"MyRefreshToken",(err,user)=>{
        if(err){
            return console.log(err)
        }
        refreshTokens = refreshTokens.filter((token)=>token !== refreshToken);
        /* The line above will make shure the current api is not in the array*/ 
        
        
        const newAccessToken = GenAccessToken(user);
        const newRefreshToken = GenRefreshToken(user);

        refreshTokens.push(newRefreshToken);
        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        })
        

    })
    //if is everthing ok,then create a new token
});
//middleware
const verify = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(" ")[1]; //if has a valid token
        
        jwt.verify(token,"MyAccessToken",(err,user)=>{
            if(err){
                res.status(403).json("Token is not valid!");
            }
            req.user = user;
            next();
        });
    }else{
        res.status(401).json("You have no access,and not authenticated!");
    }
}

app.delete("/api/users/:userId",verify,(req,res)=>{
    
    if(req.user.id === req.params.userId || req.user.isAdmin ){
        res.status(200).json("User has been deleted!");
    }else{
        res.status(403).json("You're not the related user or an Admin!");
    }
});
app.post("/api/logout",verify,(req,res)=>{
    const refreshToken = req.body.token ;
    refreshTokens = refreshTokens.filter((token)=> token !== refreshToken);
    res.status(200).json("You logged out!")
})
app.listen(3000, () => console.log("Backend is running!"));
