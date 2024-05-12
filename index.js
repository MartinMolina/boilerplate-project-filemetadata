require('dotenv').config()
var cors = require('cors');
var express = require('express');
var multer = require('multer');

var app = express();

var upload = multer();

app.use(cors());

app.use('/public', express.static(process.cwd() + '/public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Your app is listening on port ' + port)
});

// front page
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

// request file metadata
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file. mimetype,
    size: req.file.size
  });
});