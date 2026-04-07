const express = require('express');
const app = express();
const http = require('http');
const port = 3000;

const {engine} = require('express-handlebars');

const server = http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type' : 'text/plain'});
res.end('main');

});

app.engine('handlebars',handlebars({
layoutDir:__dirname + '/views/layouts'
}));
app.set('view engine','./views');





server.listen(3000,()=>{
console.log('Server running at http://localhost:3000/');
});