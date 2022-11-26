
const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const link="http://localhost:3000/"

const bodkrouter = require('./routes/book');
app.use('/allbooks',bodkrouter);


app.use(express.static(path.join(__dirname,'/images')))

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname,'./html/index.html'))
});
app.get('/admin',(req,res)=>{
    res.sendFile(path.join(__dirname,'./images/scan.gif'));
    console.log(__dirname);
    console.log(__filename);
});



app.get('/admin1',(req,res)=>{
 
   res.download(path.join(__dirname,'./images/files.gif'))

   
    console.log(__dirname);
    console.log(__filename);
});


// port
app.listen(port, () => {
  console.log(`\n🔌port contcted! ✅\n🔗 http://localhost:${port}/`)
})