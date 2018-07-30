import stepDetailTemplate from '../templates/step-detail.js';
import {registerRenderer, previousStepsNumber, addEdit} from '../services/utilities.js';
import {renderService} from '../services/render-service.js';

export default class {
    constructor() {
        registerRenderer({
            callback: this.render, 
            dataType: 'steps',
            element: 'main .details .step-details'
        });
    }

    render(allSteps, stepNumber) {
        const $el = $('main .details');
        const selectStep = _.find(allSteps, (step) => step.stepNumber === stepNumber);

        const template = _.template(stepDetailTemplate());
        const templateData = _.pick(selectStep, ['displayName', 'description', 'fields'])

        previousStepsNumber(allSteps, selectStep, templateData);
        getDependenciesCount(templateData)
        getAssignedUser(selectStep, templateData);
        getConditionsCount(selectStep, templateData);

        $el.append(template(templateData));

        const $editBlocks = $('.step-details .edit');
        _.forEach($editBlocks, (block) => {
            addEdit($(block), $(block).next());
        })
    }
}

function getDependenciesCount(templateData) {
    if (templateData.dependsOn) {
        const split = templateData.dependsOn.split(',');
        templateData.dependsOnCount = split.length;
    } else {
        templateData.dependsOnCount = 0;
    }
}

function getAssignedUser(step, templateData) {
        templateData.userCount = _.size(step.role.users);
}

function getConditionsCount(step, templateData) {
    templateData.conditionsCount = _.size(step.condiitions);
}