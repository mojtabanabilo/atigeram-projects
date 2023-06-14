import axios from "axios";

export const get = (url) => {
    axios.get(url)
    .then(res => console.log(res))
}

export const post = (url, data) => {
    axios.post(url, data)
    .then(res => console.log(res))
}