//array of vehicles in file used as database
let db = require('../data/vehicles');

let list = function(req, res){
    console.log('controller.vehicles.list');
    //code to return all vehicles
    res.json(db);
}

let show = function(req, res){
    console.log('controller.vehicles.show', req.params)
    //code to return single vehicle by id
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

//used to generate new ids for new vehicles as theyre created
let nextId = 21;

//create vehicle, assign it an id, add it to db array
//content of vehicle will be inside request body
let create = function(req, res){
    console.log('controller.vehicles.create', req.body)
    //code to create a new vehicle
    //add it to 'database'

    let newVehicle = req.body;
    newVehicle._id = nextId;
    nextId++;
    db.push(newVehicle);
    res.sendStatus(204);
}

module.exports = {
    list,
    show,
    create
}