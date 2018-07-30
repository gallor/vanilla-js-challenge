import {dataStore} from './services/data-store-service.js';
import {renderService} from './services/render-service.js';
import StepsOutline from './components/steps-outline.js';
import Process from './components/process.js';
import StepDetails from "./components/step-details.js";
import Users from './components/users.js';

'use strict';

dataStore.fetchData().then(() => {
    console.log('Data initialized');

    const stepsOutline = new StepsOutline();
    const process = new Process();
    const stepDetails = new StepDetails();
    const users = new Users();

    const firstStep = _.first(dataStore.data.stepsData);
    dataStore.setCurrentStep(firstStep.stepNumber);
    renderService.renderAll()
    
}).catch((error) => {
    console.log('Error: ' + error);
})
