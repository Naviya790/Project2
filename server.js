
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Initialize the app
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:IQxwJXMBGYskQtTfnkrJSRFzQFPiGfeH@autorack.proxy.rlwy.net:22738', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected!');
}).catch((err) => {
  console.log('MongoDB connection error: ' + err);
});

// Routes
app.get('/', (req, res) => {
  res.render('home'); // home.ejs
});

app.get('/about', (req, res) => {
  res.render('about'); // about.ejs
});

app.get('/gallery', (req, res) => {
  res.render('gallery'); // gallery.ejs
});

app.get('/register', (req, res) => {
  res.render('register'); // register.ejs
});

app.get('/login', (req, res) => {
  res.render('login'); // login.ejs
});

// Listen on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

