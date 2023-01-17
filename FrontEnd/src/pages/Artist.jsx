import ArtistInfo from "../components/Artist/ArtistInfo";
import { useParams } from "react-router-dom";

export default function Artist() {
    let params = useParams();
    let id = params.artistId;
    return (<>
    <ArtistInfo artistId={id} />
    <p>Hello</p>
    </>)
}