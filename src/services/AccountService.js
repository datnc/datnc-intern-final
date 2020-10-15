import Axios from "axios";
import { raw, log } from "../http-common";
import axios from "axios";


// const getAll = async () => {
//     return await raw.get("/account");
// };

// const get = id => {
//     return raw.get(`/account/${id}`);
// };

// const login = async (params) => {
//     return await log.get("/login", { params });
// }

const getCurrentUser = () => {
    return localStorage.getItem("Token")
}

const logOut = () => {
    return localStorage.clear()
}

// const login = (username, password) => {
//     return axios.post("http://localhost:8080/login", {
//         username,
//         password
//     })
//         .then(response => {
//             if (response.data.token) {
//                 localStorage.setItem("token", JSON.stringify(response.data));
//             }
//             return response.data;
//         });
// }
// const login = async (username, password) => {
//     return log.post("/login", {
//         username,
//         password
//     })
//         .then(response => {
//             if (response.data.token) {
//                 localStorage.setItem("user", JSON.stringify(response.data));
//             }
//             return response.data
//         })
// }


export default {
    // getAll,
    // get,
    // login,
    getCurrentUser,
    logOut
};