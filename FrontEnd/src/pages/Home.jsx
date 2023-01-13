import {Route, Outlet} from 'react-router-dom';
import AppBar from '../components/AppBar';

export default function Home() {
    return (
        <>
            <AppBar/>
            <Outlet/>
        </>
    )
}