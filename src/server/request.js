import axios from "axios";

export const get = async(url) => {
    await axios.get(url)
    .then(res => console.log(res))
}

export const post = async(url, data) => {
    await axios.post(url, data)
    .then(res => console.log(res))
}