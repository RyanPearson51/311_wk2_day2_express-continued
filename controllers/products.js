//array of products in file used as database
let db = require('../data/products');

let list = function(req, res){
    console.log('controller.products.list');
    //code to return all products
    res.json(db);
}

let show = function(req, res){
    console.log('controller.products.show', req.params)
    //code to return single product by id
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

//used to generate new ids for new products as theyre created
let nextId = 21;

//create product, assign it an id, add it to db array
//content of product will be inside request body
let create = function(req, res){
    console.log('controller.products.create', req.body)
    //code to create a new product
    //add it to 'database'

    let newProduct = req.body;
    newProduct._id = nextId;
    nextId++;
    db.push(newProduct);
    res.sendStatus(204);
}

module.exports = {
    list,
    show,
    create
}