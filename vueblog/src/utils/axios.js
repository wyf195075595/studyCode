import axios from 'axios';

import qs from 'qs'

const instance = axios.create({
    // http://106.54.247.250:3030/blog
    baseURL: 'http://106.54.247.250:4000/blog',
    method: 'post',
    transformRequest: [function (data, headers) {
        return qs.stringify(data);
    }],
});

export default instance;