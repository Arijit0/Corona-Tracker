//Install express server
const express = require('express');
const path = require('path');
 
const app = express();

// app.use(express.static(__dirname + '/Corona-Tracker'));

// Serve only the static files form the angularapp directory
app.use(express.static('./dist/corona-tracker'));
 
// app.get('/*', function(req,res) {
 
// res.sendFile(path.join(__dirname+'/Corona-Tracker/index.html'));
// });


app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/corona-tracker/'}
  );
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);