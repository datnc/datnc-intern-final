import { raw } from "../http-common";

const getAll = async () => {
    return await raw.get("/v6/newlist");
};

const gett = id => {
    return raw.get(`/v6/news/${id}`);
};

const get = id => {
    return raw.get(`/v6/newws/${id}`);
};

export default {
    getAll,
    get,
    gett
};