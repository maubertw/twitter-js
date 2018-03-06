
const express = require( 'express' );
const app = express();

//app.get('/', (req, req) => res.send('hello world!'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))