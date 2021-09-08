//array of contacts in file used as database
let db = require('../data/contacts');

let list = function(req, res){
    console.log('controller.contacts.list');
    //code to return all contacts
    res.json(db);
}

let show = function(req, res){
    console.log('controller.contacts.show', req.params)
    //code to return single contact by id
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

//used to generate new ids for new contacts as theyre created
let nextId = 21;

//create contact, assign it an id, add it to db array
//content of contact will be inside request body
let create = function(req, res){
    console.log('controller.contacts.create', req.body)
    //code to create a new contact
    //add it to 'database'

    let newContact = req.body;
    newContact._id = nextId;
    nextId++;
    db.push(newContact);
    res.sendStatus(204);
}

module.exports = {
    list,
    show,
    create
}