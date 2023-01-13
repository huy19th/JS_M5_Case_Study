import {Route, Outlet} from 'react-router-dom';
import MiniDrawer from '../components/Drawer';
import AppBar from '../components/AppBar';

export default function Home() {
    return (
        <>
            <AppBar/>
            {/* <MiniDrawer/> */}
            <Outlet/>
        </>
    )
}