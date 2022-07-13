import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

export const TasksServices = {
  getlista: () =>
    fetch(Api.baseURL + "/tasks", { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.baseURL + `/tasks/${id}`, { method: "GET" }).then(parseResponse),
  // create: (task) =>
  //  fetch(Api.baseURL + "/tasks/create-" + task, {method: "POST"}).then(parseResponse),
  updateById: (id, task) =>
    fetch(
      (Api.baseURL + `/tasks/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(task),
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }).then(parseResponse)
    ),
  deleteById: (id) =>
    fetch(Api.baseURL + `/tasks/${id}`, { method: "DELETE" }).then(
      parseResponse
    ),
};
