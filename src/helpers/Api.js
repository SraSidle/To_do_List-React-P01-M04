const urls = {
    development: "http://localhost:3333",
    production: "https://apirest-todolist-jsonserver.herokuapp.com",
};

export const Api = {
    baseURL : urls[process.env.NODE_ENV],
}