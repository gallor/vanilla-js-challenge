'use strict';

class DataService {
    constructor() {}

    fetch (type) {
        const url = "/data/" + type + ".json";
        return new Promise ((resolve, reject) => {
            const request = new XMLHttpRequest();

            function resolveRequest() {
                if (request.readyState === 4) {
                    let response;
                    try {
                        response = JSON.parse(request.response)
                        if (request.status === 200) {
                            resolve(response);
                        } else {
                            reject("No data");
                        }
                    } 
                    catch (error) {
                        reject(error);
                    }
                }
            }

            request.onreadystatechange = resolveRequest;
            request.open('GET', url);
            request.setRequestHeader('Content-Type', 'application/json');
            request.send();
        })
    }
}

export const dataService = new DataService();
