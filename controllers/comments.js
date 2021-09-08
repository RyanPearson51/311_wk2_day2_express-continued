//array of comments in file used as database
let db = require('../data/comments');

let list = function(req, res){
    console.log('controller.comments.list');
    //code to return all comments
    res.json(db);
}

let show = function(req, res){
    console.log('controller.comments.show', req.params)
    //code to return single comment by id
    //id is path param
    let id = req.params.id;

    let found = db.find(function(element, index){
        if(element._id == id){
            return true;
        } else{
            return false;
        }
    })
    res.json(found);
}

//used to generate new ids for new comments as theyre created
let nextId = 5;

//create comment, assign it an id, add it to db array
//content of comment will be inside request body
let create = function(req, res){
    console.log('controller.comments.create', req.body)
    //code to create a new comment
    //add it to 'database'

    let newComment = req.body;
    newComment._id = nextId;
    nextId++;
    db.push(newComment);
    res.sendStatus(204);
}

module.exports = {
    list,
    show,
    create
}