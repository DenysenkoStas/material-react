import React, {useState} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Navbar from '../../components/Navbar/Navbar';
import {Customers, Dashboard, OrdersPage} from '../../pages/index';
import Copyright from '../../components/Copyright/Copyright';
import Header from '../../components/Header/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        minHeight: 'calc(100vh - 64px)'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
    }
}));

const SetPageTitle = () => {
    const location = useLocation();

    let currentTitle;
    switch (location.pathname) {
        case '/':
            currentTitle = 'Dashboard';
            break;
        case '/orders':
            currentTitle = 'Orders';
            break;
        case '/customers':
            currentTitle = 'Customers';
            break;
        default:
            currentTitle = 'Page Title';
    }
    return currentTitle;
};

export default function App() {
    const classes = useStyles();
    const title = SetPageTitle();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => setOpen(!open);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header title={title} open={open} handleDrawerOpen={toggleDrawer}/>
            <Navbar open={open} handleDrawerClose={toggleDrawer}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth='lg' className={classes.container}>
                    <Switch>
                        <Route path='/' exact component={Dashboard}/>
                        <Route path='/orders' exact component={OrdersPage}/>
                        <Route path='/customers' exact component={Customers}/>
                    </Switch>
                    <Box pt={4}>
                        <Copyright/>
                    </Box>
                </Container>
            </main>
        </div>
    );
}
