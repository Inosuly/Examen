const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/view',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
//definir las rutas
//Get o Post
app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/login', (req,res)=>{
    res.render('page-login');
})

app.get('/categorias', (req,res)=>{
    res.render('table-bootstrap-basic');
})

app.get('*', (req,res)=>{
    res.render('page-error-404');
})
app.listen(port,()=>{
    console.log('el servidor esta en puerto',port);
})