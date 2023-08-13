import axios from "axios";
import { toast } from 'react-toastify';

const notify = (type, text) => {
    if(type === "success") toast(text);
    else if(type === "error") toast(text);
};

export const get = async(url) => {
    await axios.get(url)
    .then(res => console.log(res))
}

export const post = async(url, data) => {
    await axios.post(url, data)
    .then(res => {
        console.log(res);
        notify("success", "Data has been sent.");
    })
    .catch(err => {
        console.log(err);
        notify("error", "Sending data failed.");
    })
}