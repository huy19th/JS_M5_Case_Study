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

export const login = async user => {
    try {
        let res = await axios.post('/auth/login', user,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
        if (res.data) {
            let { user, token } = res.data;
            localStorage.setItem('token', token)
        }
    }
    catch (e) {
        throw new Error(e.response.data.message)
    }
    ;
}

export const register = async user => {
    try {
        await axios.post('auth/register', user,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
    }
    catch (e) {
        throw new Error(e.response.data.message);
    }
}