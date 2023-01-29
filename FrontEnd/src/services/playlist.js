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

export const addSongToPlaylist = async (songId, playlistId) => {
    try {
        let token = localStorage.getItem('token');
        await axios.post(`/playlist/${playlistId}/song/${songId}`, {}, {
            headers: {
                'Content-Type': 'multipart/form-data',
                token: token
            }
        });
    }
    catch(err) {
        console.log(err)
    }
}

export const getPlaylist = async (playlistId) => {
    try {
        let token = localStorage.getItem('token');
        let res = await axios.get(`/playlist/${playlistId}`, {
            headers: {
                token: token
            }
        });
        return res.data;
    }
    catch(err) {
        console.log(err.response.data.message)
    }
}