const app = require('./src/app');

app.get('/', (req, res)=>{
    res.send("<h1>Welcome to Zomato</h1>");
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    
})