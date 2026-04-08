const express = require('express');
const app = express();
const port = 3000;
const path = require("path");

const {engine} = require('express-handlebars');


app.get('/',(req,res)=>{
  res.render('main');
});
app.engine('handlebars',engine({

  defaultLayout: 'main',
  layoutsDir: __dirname + './views/layouts',
  partialsDir: __dirname + './views/partials'
}
));
app.set('view engine','./views');


//root for the folder handlebars
app.set('views', path.join(__dirname, 'views'));



app.listen(3000,()=>{
console.log(`Server running at http://localhost:${port}`);
});