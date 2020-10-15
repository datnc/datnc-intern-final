import { raw } from "../http-common";

const getAll = async (params) => {
    return await raw.get("/v3/tt", { params });
};

const get = id => {
    return raw.get(`/v3/infor${id}`);
};

// const create = data => {
//     return http.post("/info", data);
// };

// const update = (id, data) => {
//     return http.put(`/info/${id}`, data);
// };

// const remove = id => {
//     return http.delete(`/info/${id}`);
// };

// const removeAll = () => {
//     return http.delete(`/info`);
// };

// const findByTitle = title => {
//     return http.get(`/info/${id}`);
// };

export default {
    getAll,
    get,
    // create,
    // update,
    // remove,
    // removeAll,
    // findByTitle
};