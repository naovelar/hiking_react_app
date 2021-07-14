import React from 'react';
import { AuthCheck } from 'reactfire';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import hiking_image from '../../assests/images/hiking_men.png';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HikingIcon from '@material-ui/icons/Hiking';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Drawer as MUIDrawer, 
    ListItem, 
    List, 
    ListItemIcon, 
    ListItemText, 
    Theme,
    useTheme, 
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
} from '@material-ui/core';
const drawerWidth = 240;



const useStyles = makeStyles( (theme:Theme) =>
createStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#b39ddb'
        
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'white'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hiking_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    },
    
}));


    


interface Props{
    title: string
}

export const Home = ( props:Props)=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/*New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                            <li>
                                <Link to='/' href="" className={classes.nav_a}>Home</Link>
                            </li>
                            <AuthCheck fallback={
                            <li>
                                <Link to="/signin" className={classes.nav_a}>Sign In</Link>
                            </li>
                        }>
                        
                        <li>
                            <Link to="/dashboard" className={classes.nav_a}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/signin" className={classes.nav_a}>Sign Out</Link>
                        </li>
                        </AuthCheck>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <Link to='signin'> 
                        <Button color='primary' variant="contained">Click Me</Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}