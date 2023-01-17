import Avatar from "@mui/material/Avatar";
import { getArtistInfo } from "../../services/artist";
import { useState } from "react";
import { useEffect } from "react";
import { Typography } from "@mui/material";

export default function ArtistInfo(props) {
    const [info, setInfo] = useState({});
    useEffect(() => {
        getArtistInfo(props.artistId)
            .then(result => {
                setInfo(result.data);
            });

    },[info])

    if (info) {
        return (
            <>
                <Avatar alt="Image" src={info.image} />
                <Typography>{info.name}</Typography>
            </>
        )
    }
    else {
        return (
            <>
                <Avatar alt="Image" src="" />
                <Typography>Hello</Typography>
            </>
        )
    }

}