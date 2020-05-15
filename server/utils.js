const path = require('path');
const fs = require('fs');

export function listArchetypes() {
    var folder = path.dirname('../archetypes')
    console.log(fs.readdir(folder));
}
