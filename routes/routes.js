const path = require('path');
const fs = require('fs');
const notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
//Route
module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(notes));
    //Displays notes.html
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
    //Displays index.html
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
    
    
    //req.body = body parsing middleware
    //The data parsed from JSON gets pushed as newNote 
    const updateDb = (res) => {
        fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            return res.sendStatus(200);
        })
    }
    //API Post route
    //updateDb() updats the the database with the new note:https://linux.die.net/man/8/updatedb#:~:text=updatedb%20creates%20or%20updates%20a,to%20update%20the%20default%20database.
    //adds newNote to db.json with updateDb()
    app.post('/api/notes', (req, res) => {
        var newNote = req.body;
        notes.push(newNote);
        updateDb(res);

    });
    app.get('/api/notes/:id', (req, res) => {
        //locates specific item in array by id
        const { v4: uuidv4 } = savedNote.title.text.id;
        res.json(notes[req.params.id]); 
        console.log(req.params.id);
    });
    app.delete('/api/notes/:id', (req, res) => {
        notes.splice(res.params.id, 1);
        updateDb();
        console.log(res.params.id);
    });
};



