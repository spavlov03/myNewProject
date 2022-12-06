const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api/people', PersonController.getAllPeople);
    app.post('/api/people', PersonController.createPerson); 
    app.get('/api/people/:id', PersonController.getOnePerson);
    app.put('/api/people/:id',PersonController.updatePerson);
    app.delete('/api/people/:id',PersonController.deletePerson);
}
