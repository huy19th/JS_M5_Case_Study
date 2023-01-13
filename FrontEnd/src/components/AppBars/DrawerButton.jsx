import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DrawerButton(props) {
    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawer}
            edge="start"
            sx={{
                marginRight: 5,
            }}
        >
            <MenuIcon />
        </IconButton>
    )
}