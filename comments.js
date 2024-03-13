//create web server using express
//create a route that returns a list of comments
//create a route that returns a single comment
//create a route that posts a new comment
//create a route that updates a comment
//create a route that deletes a comment
//use nodemon to run the server

//express is a framework for Node.js
//npm install express --save
//nodemon is a utility that will monitor for any changes in your source and automatically restart your server
//npm install -g nodemon

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var comments = [
    {id: 1, body: "This is a comment"},
    {id: 2, body: "This is another comment"},
    {id: 3, body: "This is a third comment"}
];

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.get('/comments/:id', function(req, res) {
    var comment = comments.find(function(comment) {
        return comment.id === parseInt(req.params.id);
    });
    res.json(comment);
});

app.post('/comments', function(req, res) {
    var newComment = req.body;
    newComment.id = comments.length + 1;
    comments.push(newComment);
    res.json(newComment);
});

app.put('/comments/:id', function(req, res) {
    var updatedComment = req.body;
    var comment = comments.find(function(comment) {
        return comment.id === parseInt(req.params.id);
    });
    comment.body = updatedComment.body;
    res.json(comment);
});

app.delete('/comments/:id', function(req, res) {
    var comment = comments.find(function(comment) {
        return comment.id === parseInt(req.params.id);
    });
    var index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.json(comment);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
