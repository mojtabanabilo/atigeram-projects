import axios from "axios";

export const get = async(url) => {
    await axios.get(url)
    .then(res => console.log(res))
}

export const post = async(url, data) => {
    await axios.post(url, data)
    .then(res => {
        // if(res.status === 200 || res.status > 200) console.log("done")
        if(res.data) console.log("done")
    })
}