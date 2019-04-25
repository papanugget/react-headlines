import axios from 'axios';

export default axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
        Authorization: 'apiKey=7473e3ba38184699a3d401262f418dd3'
    }
});