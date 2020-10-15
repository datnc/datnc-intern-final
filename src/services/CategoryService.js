import { raw } from "../http-common";

const getAll = async () => {
    return await raw.get("/v5/catee");
};

export default {
    getAll
};