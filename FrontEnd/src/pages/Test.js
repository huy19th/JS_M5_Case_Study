import { useState, useEffect } from 'react';
import { getAllPlaylists } from '../services/playlist';


export default function Test() {
    // State with list of all checked item
    const [checked, setChecked] = useState([]);
    const [checkList, setCheckList] = useState([]);

    useEffect(() => {
        getAllPlaylists().then(res => {
            setCheckList(() => res);
            console.log(checkList)
        })
    }, [])

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    return (
        <div className="checkList">
            <div className="title">Your CheckList:</div>
            <div className="list-container">
                {checkList.map((item, index) => (
                    <div key={index}>
                        <input id={`playlist-${item.id}`} value={item.id} type="checkbox" onChange={handleCheck} />
                        <label for={`playlist-${item.id}`}>{item.name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}
