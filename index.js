let express = require('express');
let app = express();
let user = require('./routes/user');
let login = require('./routes/Login_Design_page')
let morgan = require('morgan');
let bodyparser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use('/', express.static('public'));

app.use('/user', user)
app.use('/Login_Design_page', login)

app.listen(3000, () => {
    console.log('Example App is listening on port 3000');
});
