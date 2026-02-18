const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.use(express.static('public'));
app.use('/css', express.static('css'));

app.use(express.static('public'));
app.use('/html', express.static('html'));
// Routes to serve HTML files

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html','index.html'));
});
app.get('/tours', (req, res) => {
  res.sendFile(path.join(__dirname, 'html','tours.html'));
});
app.get('/package', (req, res) => {
  res.sendFile(path.join(__dirname, 'html','package.html'));
});
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'html','blog.html'));
});
app.get('/details', (req, res) => {
  res.sendFile(path.join(__dirname,'html','details.html'));
});
app.get('/aboutus', (req, res) => {
  res.sendFile(path.join(__dirname, 'html','aboutus.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'html','contact.html'));
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
