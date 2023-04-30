"use strict";

import { BackendMicroservice, CONFIG, Microservice } from "qcobjects";

class HelloWorld extends BackendMicroservice {

  constructor(microservice:Microservice){
    microservice.body = CONFIG.get("helloWorldMessage", "Hello world!");
    super(microservice);
  }

}

export default HelloWorld;