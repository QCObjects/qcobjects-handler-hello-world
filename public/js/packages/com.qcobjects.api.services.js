"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
class HelloWorld extends qcobjects_1.BackendMicroservice {
    constructor(microservice) {
        microservice.body = qcobjects_1.CONFIG.get("helloWorldMessage", "Hello world!");
        super(microservice);
    }
}
exports.default = HelloWorld;
