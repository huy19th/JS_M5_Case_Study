import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MLink from '@mui/material/Link';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../services/register';


import { useFormik } from 'formik';
import * as Yup from 'yup';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="https://mui.com/">
                Fragments
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login() {
    const navigate = useNavigate();
    const [err, setErr] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            'image-user': null,
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email Required'),
            password: Yup.string().required('Password Required')
        }),
        onSubmit: async (values) => {
            try {
                await postUser(values);
                console.log('hello2');
            }
            catch (e) {
                setErr(e.message);
            }
        },
    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email *"
                        name="email"
                        autoFocus
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}

                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password *"
                        id="password"
                        type="password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                    <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        {...formik.getFieldProps('name')}
                    />
                    <label htmlFor="upload-photo">
                        <input
                            style={{ display: "none" }}
                            id="image-user"
                            name="image-user"
                            type="file"
                        />
                        <Fab
                            color="secondary"
                            size="small"
                            component="span"
                            aria-label="add"
                            variant="extended"
                        >
                            <AddIcon /> Upload photo
                        </Fab>
                    </label>
                    <br />
                    {err ? <div>{err}</div> : null}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/login">
                                    Already registered? Log In
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}