import axios from "../axios";

export const getUser = async () => {
    try {
        let token = localStorage.getItem('token');
        let res = await axios.get('/user', {
            headers: {
                token: token
            }
        });
        return res.data;
    }
    catch (err) {
        throw err;
    }
}