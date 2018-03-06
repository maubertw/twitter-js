

const express = require( 'express' );
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express();


const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

    
    
    
app.set('view engine', 'html'); 
app.engine('html', nunjucks.render); 
nunjucks.configure('views', { noCache: true }); 

app.get('/', (req, res, next) => {res.render( 'index', locals ); next()})


app.listen(3000, () => console.log('example app listening on port 3000'));