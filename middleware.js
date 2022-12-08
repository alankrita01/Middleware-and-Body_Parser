const express = require('express');
const app = express();

app.use('/about-product',(req,res,next) =>{
  console.log('This is add product middleware');
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/',(req,res,next) =>{
  console.log('This is middleware');
  res.send('<h1>Hello from Express.js!</h1>')
})

app.listen(3000);