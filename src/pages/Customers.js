import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Card, CardActions, CardContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
}));

export default function Customers() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <Grid container justify='center' spacing={3}>
            {users.map(({id, name, username, email, phone, website}) => (
                <Grid key={id} item xs={12} md={4} lg={3}>
                    <Card lg={3} className={classes.paper}>
                        <CardContent>
                            <Typography className={classes.title} color='textSecondary' gutterBottom>
                                {name}
                            </Typography>
                            <Typography variant='h5' component='h2'>
                                {username}
                            </Typography>
                            <Typography className={classes.pos} color='textSecondary'>
                                {email}
                            </Typography>
                            <Typography variant='body2' component='p'>
                                {phone}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>{website}</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
