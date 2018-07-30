import stepsOutlineTemplate from '../templates/steps-outline.js';
import {registerRenderer, previousStepsNumber, getAssignedUsers} from '../services/utilities.js';
import {dataStore} from '../services/data-store-service.js';
import {renderService} from '../services/render-service.js';

export default class {
    constructor() {
        registerRenderer({
            callback: this.render, 
            dataType: 'steps',
            element: 'aside .steps .step-outline'
        });
     } 

    render(allSteps, currentStepNumber) {
        const $el = $('aside .steps');
        _.forEach(allSteps, (step) => {
            const template = _.template(stepsOutlineTemplate());
            const templateData = {
                stepNumber: step.stepNumber,
                displayName: step.displayName,
            };
            previousStepsNumber(allSteps, step, templateData);
            getAssignedUsers(step, templateData);

            let $parsedStep = $($.parseHTML(template(templateData)));
            
            if (step.stepNumber === currentStepNumber) {
                $parsedStep = $parsedStep.addClass('active');
            }

            $parsedStep.data('id', step.stepNumber);

            $parsedStep.on('click', () => {
                dataStore.setCurrentStep($parsedStep.data('id'))
                renderService.renderAll();
            });

            $el.append($parsedStep);
        })
    }
}

