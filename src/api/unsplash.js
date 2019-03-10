import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID 4a8a4ff212d17865a37cbafa0cd4da4b9e84480fdedfcd614bf048c8e87a93b0'
    }
});