import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api/song"
const getSong = async () => {
    return await axios.get("/");
}
export default getSong