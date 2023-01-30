import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api/song"


export const getSong = async () => {
    return await axios.get("/");
}
export const getSongR = async () => {
    return await axios.get("/all");
}
export const getSongVietNam = async () => {
    return await axios.get("/country/Vietnam");
}
export const getSongVietNamR = async () => {
    return await axios.get("/country/Vietnam/R");
}

export const getSongNotCountry = async () => {
    return await axios.get("/country/not/Vietnam")
}

export const getTrendingSong = async () => {
    return await axios.get("/trendingSongs");
}
export const getTrendingSongR = async () => {
    return await axios.get("/trendingSongsR");
}



