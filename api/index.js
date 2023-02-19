import axios from 'axios';

const url = 'http://localhost:5000/account';

export const fetchAccount = () => {
    axios.get(url);
}