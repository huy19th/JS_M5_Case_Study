import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api/album"

export const getAlbum = async () =>{
    return await axios.get('/')
}