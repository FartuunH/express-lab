const express = require('express');
const path = require('path');

 const app = express();

 app.set('view engine','ejs');
 app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

const studentDb = require('./data/student-db')

app.get('/student', function(req, res) {
    const students = studentDb.getAll();
    res.render('students/index', { students });


});
  




app.listen(3000, function() {
    console.log('listening on port 3000')
});