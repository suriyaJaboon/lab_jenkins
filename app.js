const express =  require('express'); 
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
require('./config/passport')(passport);

const app = express();
const port = process.env.PORT || 3000;
// const port = 3000;
const users = require('./routes/users');

mongoose.connect(config.database, { useMongoClient: true });
mongoose.connection.on('connected', () => {
    console.log('Conneted to database '+ config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+ err);
});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use('/users', users);

app.get('/', (req, res) => {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});
app.listen(port, () => {
    console.log('Server started application on port: '+ port);
});