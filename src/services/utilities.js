import {renderService} from '../services/render-service.js';

export function generateRandomImageNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

export function getUserImage(number) {
    return '../../images/avatars/pb_' + number + '.jpg';
}

export function registerRenderer(renderCallback) {
    renderService.addRenderer(renderCallback);
}

export function previousStepsNumber(allSteps, step, templateData) {
    const requiredStepNumbers = [];
    if (!_.isEmpty(step.requiredPreviousSteps)) {
        _.forEach(step.requiredPreviousSteps, (previousStep) => {
            const requiredStep = _.find(allSteps, (stepFromAll) => {
                return stepFromAll.stepName === previousStep;
            });
            if (requiredStep) {
                requiredStepNumbers.push(requiredStep.stepNumber);
            }
        })
    }
    if (!_.isEmpty(requiredStepNumbers)) {
        templateData.dependsOn = requiredStepNumbers.join(', ');
    }
}

export function getAssignedUsers(step, templateData) {
    const users = []
    if (!_.isEmpty(step.role.users)) {
        _.forEach(step.role.users, (user) => {
            users.push(user);
        })
    }
    if (!_.isEmpty(users)) {
        templateData.assigned = users.join(', ');
    }
}

export function addToggle($toggleSelector, $blockToToggle) {

    $toggleSelector.on('click', function() {
        if ($blockToToggle.hasClass('open')) {
            $blockToToggle.hide(500)
            $blockToToggle.removeClass('open');
        } else {
            $blockToToggle.show(500);
            $blockToToggle.addClass('open');
        }
    })
}

export function addEdit($editSelector, $blockToEdit) {
    $editSelector.on('click', () => {
        let editText = $blockToEdit.text();
        let $replaceBlock = $('<input type="text" value="' + editText + '"/>');

        $blockToEdit.replaceWith($replaceBlock)
    })
}