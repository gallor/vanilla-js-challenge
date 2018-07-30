import {dataStore} from './data-store-service.js';

class RenderService {
    constructor() {
        this.renderCallbackCollection = [];
    }

    addRenderer(renderCallback) {
        this.renderCallbackCollection.push(renderCallback);
    }

    renderAll() {
        this.clearRenderedContent()
        _.forEach(this.renderCallbackCollection, (callbackObject) => {
            const {callback, dataType} = callbackObject;
            const data = dataStore.data[dataType + 'Data'];
            !!data && callback(data, dataStore.currentStepId);
        })
    }

    clearRenderedContent(callbackObject) {
        _.forEach(this.renderCallbackCollection, (callbackObject) => {
            const {element} = callbackObject;
            if (element) {
                const $elements = $(element);
                $elements.remove();
            }
        })
    }
}

export const renderService = new RenderService();