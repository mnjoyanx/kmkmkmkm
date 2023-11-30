import axios from "axios";
import {
    ApiHost
} from "../globalConfigs";

export let host = ApiHost;

const Request = {
    get: (body, url) => {
        return request("get", "/admin/" + url + "/getter", body);
    },
    post: (body, url) => {
        return request("post", "/admin/" + url, body);
    },
    put: (body, url) => {
        const id = body.id;
        delete body.id;
        return request("put", "/admin/" + url + "/" + id, body);
    },
    delete: (url) => {
        return request("delete", "/admin/" + url);
    },
    deleteImg: (url, body) => {
        return request("delete", "/" + url, body);
    },

    login: (body) => {
        return request("post", "/auth/login", body);
    },

    checkToken: (token) => {
        return request("post", "/auth/validate", {
            token
        });
    },
};

const request = (method, url, data) => {

    let options = {
        url,
        method,
        timeout: 10000,
        headers: {
            "content-type": "application/json"
        },
        baseURL: host
    }

    if (localStorage.getItem("token")) {
        options.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
    }

    if (method == "get") {
        options.params = data;
    } else {
        options.data = data;
    }

    return axios(options).catch((error) => {
        throw new Error(error.response.data);
    });

};

export default Request;