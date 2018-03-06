
const express = require( 'express' );
const chalk = require('chalk');
const volleyball = require('volleyball')
const app = express();
npm start
//app.get('/', (req, req) => res.send('hello world!'))

var printFunction = function (req, res, next){
	console.log(chalk.blue('Hell yea, Vi & Mary are the coolest'))
	next()

}

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/mary', function (req, res, next) {
	res.send("Hey, it's Mary!")
	next()

})





app.use(volleyball)






















app.listen(3000, () => console.log('Example app listening on port 3000!'))




