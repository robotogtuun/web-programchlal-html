const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');
const shopRouter = require('./routes/shop');
const serviceRouter = require('./routes/service');
const adminRouter = require('./routes/admin');
const cartRouter = require('./routes/cart');
const authRouter = require('./routes/auth');

const User = require('./model/user');

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongooseSession = require('connect-mongodb-session')(session);
const flash = require('connect-flash');


app.set('view engine', 'ejs');
app.set('views', 'views');
const store = new mongooseSession({
    uri: 'mongodb+srv://user:99534036Togtuun@cluster0.pap9q.mongodb.net/mongolian-nutrition?retryWrites=true&w=majority',
    collection: 'session'
});

app.use(session({secret: 'secret', resave: false, saveUninitialized: false, store: store}));
app.use(flash());

app.use((req, res, next) => {
    if(!req.session.user) return next();
    User.findById(req.session.user._id)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        });
});

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const csrf = require('csurf');
const csrfToken = csrf();
app.use(csrfToken);

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/shop', shopRouter);
app.use('/service', serviceRouter);
app.use('/admin', adminRouter);
app.use('/cart', cartRouter);
app.use('/', authRouter);

app.use((req, res) => {
    res.status(404).render('404' , { pageTitle: 'Page not found :(' });
});

app.use((err, req, res, next) => {
    if (err.code !== 'EBADCSRFTOKEN') return next(err);
    res.status(403).render('csrf', { pageTitle: 'Error while signing up :(' });
});


mongoose.connect('mongodb+srv://user:99534036Togtuun@cluster0.pap9q.mongodb.net/mongolian-nutrition?retryWrites=true&w=majority',
    {useNewUrlParser: true})
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })

const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Holbogdson'));