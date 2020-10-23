var express = require('express');
var app = express();
let cors = require('cors');
const PORT = process.env.PORT || 8000;

app.use(express.static('public'));
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });

var server = app.listen(PORT, function () {

  console.log(`Express app listening at ${PORT}`);

});
