const fs = require('fs');

module.exports = class Project {

    constructor(projectApi, filePath) {
        this.projectApi = JSON.parse(projectApi);
        // this.projectApi = projectApi;
        this.filePath = filePath;
    }

    save() {
        // let newProjectJsonData = JSON.parse(this.projectApi);
        // fs.writeFileSync(this.filePath, JSON.stringify(newProjectJsonData));
        fs.writeFileSync(this.filePath, JSON.stringify(this.projectApi));
    }

}