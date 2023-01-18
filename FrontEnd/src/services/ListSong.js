import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api/song"


export const getSong = async () => {
    return await axios.get("/");
}
export const getSongVietNam = async () => {
    return await axios.get("/country/Vietnam");
}
export const getSongNotCountry = async () => {
    return await axios.get("/country/not/Vietnam")
}

export const getTrendingSong = async () => {
    return await axios.get("/trendingSongs");
}
