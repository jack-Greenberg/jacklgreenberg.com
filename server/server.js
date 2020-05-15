const path = require('path');
const fs = require('fs');
const express = require('express');
var cors = require('cors')

var api = express();
api.use(cors());

const rootFolder = '../../';

export function listArchetypes() {
    var folder = path.join(rootFolder, 'archetypes');
    return fs.readdirSync(folder).map(item => {
        return {
            name: item.charAt(0).toUpperCase() + item.replace(".md", "").slice(1),
        };
        // return path.join(folder, item);
    });
}

// console.log(listArchetypes());

api.get('/archetypes', function (req, res) {
    res.type('application/json');
    res.end(JSON.stringify(listArchetypes()));
})

var server = api.listen(1314, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("API listening at http://%s:%s", host, port)
})
