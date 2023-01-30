import { useState, useEffect } from 'react';
import { getAllPlaylists } from '../services/playlist';
import RequireLogin from '../components/Content/RequireLogin';

export default function Test() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)}>Click</button>
            <RequireLogin showModal={showModal} setShowModal={setShowModal}/>
        </>
    )
}
