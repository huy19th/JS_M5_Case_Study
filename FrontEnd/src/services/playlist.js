import axios from "../axios";

export const getAllPlaylists = async () => {
    try {
        let token = localStorage.getItem('token');
        let res = await axios.get('/playlist', {
            headers: {
                token: token
            }
        });
        console.log(res.data);
        return res.data;
    }
    catch (err) {
        throw err;
    }
}

export const addPlaylist = async (values) => {
    try {
        let token = localStorage.getItem('token');
        await axios.post('/playlist', values, {
            headers: {
                'Content-Type': 'multipart/form-data',
                token: token
            }
        });
    }
    catch (err) {
        console.log(err.response.data);
    }
}