const Person = require('../models/person.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
          /* The method below is new */
module.exports.createPerson = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Person.create(request.body) //This will use whatever the body of the client's request sends over
        .then(person => response.json(person))
        .catch(err => response.json(err));
}
module.exports.getAllPeople = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Person.find(request.body) //This will use whatever the body of the client's request sends over
        .then(people => response.json(people))
        .catch(err => response.json(err));
}
module.exports.getOnePerson = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Person.findOne({_id:request.params.id})
        .then(people => response.json(people))
        .catch(err => response.json(err));
}
module.exports.updatePerson = (req,res) => { 
    Person.findOneAndUpdate({_id:req.params.id}, req.body)
    .then(updatedPerson => res.json(updatedPerson))
    .catch(err=>res.json(err))
}
module.exports.deletePerson = (req,res) => { 
    Person.deleteOne({_id:req.params.id})
    .then(deletedPerson => res.json(deletedPerson))
    .catch(err=>res.json(err))
}