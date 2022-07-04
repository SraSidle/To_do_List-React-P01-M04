import {Api} from '../helpers/Api'

const parseResponse = (response) => response.json();
console.log(parseResponse)

export const TasksServices = {
    getlista: () => 
     fetch((Api.baseURL + "/tasks"), {method: "GET"}).then(parseResponse),  
    getById: (id) =>
     fetch((Api.baseURL + "/tasks/" +`${id}`), {method: "GET"}).then(parseResponse),
     create: (task) =>
        fetch(Api.baseURL + "/tasks/create-" + task, {method: "POST"}).then(parseResponse),
}