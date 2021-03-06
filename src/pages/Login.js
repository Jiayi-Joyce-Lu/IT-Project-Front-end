/*eslint no-restricted-globals : 0 */
import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import LoginButton from "../components/Button/LoginButton";

import {useAuth0} from "@auth0/auth0-react";

import LogoutButton from "../components/Button/LogoutButton";

import UpdateProfileButton from "../components/Button/UpdateProfileButton";
import logo from '../assets/Ivory Bliss_T.png';
import {getUserAndCreat} from "../api"

const usestyles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Login extends Component {
    render() {
        //const classes = useStyles();
        function Copyright() {
            return (
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        Your Website
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            );
        }

        const {classes} = this.props;

        //const {loginWithRedirect} = useAuth0();
        /*const {logout} = useAuth0();
        const {user, isAuthenticated} = useAuth0();*/
        return (
            <div>
                {this.props.auth.isAuthenticated() && <div>

                    <LogoutButton {...this.props}/>
                    <UpdateProfileButton/>
                </div>
                }
                {!this.props.auth.isAuthenticated() && <Grid container component="main" className={classes.root}>
                    <CssBaseline/>

                    <Grid item xs={false} sm={4} md={7} className={this.props.classes.image}/>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

                        <div className={classes.paper}>
                            <img src = {logo}/>
                        </div>

                        <div className={classes.paper}>
                            {/*{<Avatar className={classes.avatar}>*/}
                            {/*    <LockOutlinedIcon />*/}
                            {/*</Avatar>}*/}
                            {/*{<Typography component="h1" variant="h5">*/}
                            {/*    Sign in*/}
                            {/*</Typography>*/}
                            <form className={classes.form} noValidate>
                                {/*    <TextField*/}
                                {/*        variant="outlined"*/}
                                {/*        margin="normal"*/}
                                {/*        required*/}
                                {/*        fullWidth*/}
                                {/*        id="email"*/}
                                {/*        label="Email Address"*/}
                                {/*        name="email"*/}
                                {/*        autoComplete="email"*/}
                                {/*        autoFocus*/}
                                {/*    />*/}
                                {/*    <TextField*/}
                                {/*        variant="outlined"*/}
                                {/*        margin="normal"*/}
                                {/*        required*/}
                                {/*        fullWidth*/}
                                {/*        name="password"*/}
                                {/*        label="Password"*/}
                                {/*        type="password"*/}
                                {/*        id="password"*/}
                                {/*        autoComplete="current-password"*/}
                                {/*    />*/}
                                {/*    <FormControlLabel*/}
                                {/*        control={<Checkbox value="remember" color="primary" />}*/}
                                {/*        label="Remember me"*/}
                                {/*    />}*/}
                                <Button
                                    //type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.props.auth.login}
                                >
                                    Log In / SiGn Up
                                </Button>
                                

                                <Grid container>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {/*"Forgot password? Reset"*/}
                                        </Link>
                                    </Grid>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">

                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {/*"Don't have an account? Sign Up"*/}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <div className={classes.paper}>

                                </div>
                                <div className={classes.paper}>

                                </div>
                                <div className={classes.paper}>

                                </div>
                                <div className={classes.paper}>

                                </div>
                                <div className={classes.paper}>

                                </div>
                                <Box mt={5}>
                                    <Copyright/>
                                </Box>
                            </form>
                        </div>
                    </Grid>
                </Grid>

                }

            </div>
        )
    }
}

export default withStyles(usestyles)(Login)