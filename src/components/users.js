import {generateRandomImageNumber, getUserImage, registerRenderer} from '../services/utilities.js';
import userTemplate from '../templates/user.js'

export default class {
    constructor() {
        registerRenderer({
            callback: this.render,
            dataType: 'users',
            element: '.step-details .users'
        })
    }

    render (userData) {
        const $el = $('.step-details .users');

        const template = _.template(userTemplate());
        const templateData = {};

        _.forEach(userData, (user) => {
            templateData.username = user.username;
            templateData.imgUrl = getUserImage(generateRandomImageNumber());

            $el.append(template(templateData));
        })
    }
}

