import axios from '../axios';

export const search = async (searchKey) => {
    let res = await axios.get(`/search/${searchKey}`);
    console.log(res.data)
    return res.data
}