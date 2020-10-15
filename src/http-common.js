import axios from "axios";

export const raw = axios.create({
    baseURL: "http://localhost:8080/api/",
    headers: {
        "Content-type": "application/json"
    }
});
// export const log = axios.post({
//     baseURL: "http://localhost:8080/",
//     headers: {
//         "Content-type": "application/json"
//     }
// });
export const cooked = axios.create({
    baseURL: "https://5f715f4e64a3720016e605a0.mockapi.io/",
    headers: {
        "Content-type": "application/json"
    }
});