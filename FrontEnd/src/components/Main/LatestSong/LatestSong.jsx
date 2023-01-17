import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListSong from './ListSong';
import ListSongVietNam from './ListSongVietNam';
import ListSongNotCountry from './ListSongNotFromCountry';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box >
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft: "235px" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Tất cả" {...a11yProps(0)} />
                    <Tab label="Việt Nam" {...a11yProps(1)} />
                    <Tab label="Quốc Tế" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ListSong/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ListSongVietNam/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ListSongNotCountry/>
            </TabPanel>
        </Box>
    );
}