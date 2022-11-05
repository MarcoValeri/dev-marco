const fs = require('fs');

module.exports = class Project {

    constructor(filePath) {
        this.filePath = filePath;
    }

    read() {
        let projectsJsonData = fs.readFileSync(this.filePath);
        return JSON.parse(projectsJsonData);
    }

    save(projectApi) {
        let projectApiJson = JSON.parse(projectApi);
        fs.writeFileSync(this.filePath, JSON.stringify(projectApiJson));
    }

}