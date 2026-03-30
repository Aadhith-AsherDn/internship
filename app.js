const { time } = require('console')
const express = require('express')
const app = express()
const port = 3000
const host = 'localhost'
  const user={
            name : "AADHITH SHESHU P S",
            role : "INTERN"
        }
const aboutData = {about : "I am Aadhith sheshu,Mechatronics engineering graduate with strong foundations in automation, embedded systems, and software-driven problem solving. Experienced in developing logic-based control systems using ESP32 and Arduino, with exposure to data handling, system integration, and scalable digital solutions."}

app.get('/',(req,res)=>{
    res.send("Server is running");
})
app.get('/hello',(req,res)=>{
    res.send("hello from Express");
})
app.get('/user',(req,res)=>{
    res.json(user);
})
app.get('/time',(req,res)=>{
    const dateTime = new Date();
    res.send(dateTime.toString());
})
app.get('/about',(req,res)=>{
    res.json(aboutData);
})
app.listen(port,() => {
  console.log(`Server is running at http://${host}:${port}/`);
  console.log(`Server is running at http://${host}:${port}/hello`);
  console.log(`Server is running at http://${host}:${port}/user`);
  console.log(`Server is running at http://${host}:${port}/time`);
  console.log(`Server is running at http://${host}:${port}/about`);
});