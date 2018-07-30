import {dataService} from './data-service.js'

class DataStoreService {
    constructor() {
        this.data = {};
        this.currentStepId;
    }

    fetchData() {
        return new Promise((resolve, reject) => {
            async function fetch() {
                const data = {
                    stepsData: await dataService.fetch('steps'),
                    usersData: await dataService.fetch('users'),
                    processData: await dataService.fetch('process')
                }
                return data;
            }

            fetch().then(data => {
                this.data = data;
                resolve();
            }).catch(reject);
        });
    }

    setCurrentStep(id) {
        this.currentStepId = id;
    }
}

export const dataStore = new DataStoreService();