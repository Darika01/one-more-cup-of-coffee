// utils/API.js

import axios from 'axios';

export default axios.create({
    baseURL: 'https://cupofcoffee.herokuapp.com/',
    responseType: 'json'
});
