import processTemplate from '../templates/process.js';
import {registerRenderer, addToggle, addEdit} from '../services/utilities.js';

export default class {
    constructor() {
        registerRenderer({
            callback: this.render, 
            dataType: 'process',
            element: 'main .process .process-wrapper'
        });
    }


    render(process) {
        const $el = $('main .process');

        const template = _.template(processTemplate());
        const templateData = _.pick(process, ['displayName', 'description', 'category'])

        $el.append(template(templateData));
        addToggle($('.process-wrapper .toggle'), $('main .process-block'));

        const $editBlocks = $('.process-block .edit');
        _.forEach($editBlocks, (block) => {
            addEdit($(block), $(block).next());
        })
    }
}