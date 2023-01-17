import axios from '../axios';

export const getArtistInfo = async (artistId) => {
    try {
        let res = await axios.get(`/api/artist/${artistId}`);
        return res.data;
    }
    catch(err) {
        return {}
    }
}