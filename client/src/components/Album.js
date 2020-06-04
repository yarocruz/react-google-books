import React, { useState, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TextField } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import Logo from '../assets/ucf-logo.png';
import { Link } from "react-router-dom";

import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Album() {
    const classes = useStyles();
    const [ books, setBooks ] = useState([]);
    const searchRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        API.findBook(searchRef.current.value)
            .then(res => {
                console.log(res.data);
                setBooks(res.data.items);
                console.log(books);
            })
            .catch(err => console.log(err));
    }

    const handleSave = (book) => {
        API.saveBook(book)
            .then(res => {
               console.log(res);
               console.log(book.id);
            })
            .catch(err => console.log(err));
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <img style={{ paddingRight: '10px' }} src={Logo} alt='University of Florida Logo'/>
                    <Typography variant="h6" color="inherit" noWrap>
                       <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Bootcamp Project</Link>
                    </Typography>
                    <Typography
                        style={{ marginRight: '10px' }}
                        variant="h6">
                        <Link
                            style={{ textDecoration: 'none', color: '#fff', paddingLeft: '20px' }}
                            to='/saved'>Saved Books</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Google Books Search App
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Look up a book and save it to your favorites.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <form onSubmit={handleSearch}>
                                        <TextField
                                            inputRef={searchRef}
                                            id="outlined-basic"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <Button variant="text" color="primary" fullWidth={false}>
                                                        Search
                                                    </Button>
                                                </InputAdornment>,
                                            }}
                                        />
                                    </form>

                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {!books || books.map((book) => (
                            <Grid item key={book.id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <img
                                            style={{ borderRadius: '9px', border: '1px solid #ddd'}}
                                            src={book.volumeInfo.imageLinks.thumbnail}
                                            alt='book cover'
                                        />
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {book.volumeInfo.title}
                                        </Typography>
                                        <Typography>
                                            {book.volumeInfo.description}
                                        </Typography>
                                        <Typography variant="h5">
                                            {book.volumeInfo.authors}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <a href={book.volumeInfo.infoLink}>More Info</a>
                                        </Button>
                                        <Button size="small" color="primary" onClick={() => handleSave(book)}>
                                            Add Book
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}