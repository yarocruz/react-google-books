import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../assets/ucf-logo.png";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {makeStyles} from "@material-ui/core/styles";

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

export default function Saved() {
    const classes = useStyles();
    const [ savedBooks, setSavedBooks ] = useState();

    useEffect(() => {
      loadBooks();
    }, []);

    const loadBooks = () => {
        API.getBooks()
            .then(response => {
                console.log(response);
                setSavedBooks(response.data);
                console.log(savedBooks);
            }).catch(err => console.log(err));
    }

    const handleDelete = (id) => {
        API.deleteBook(id)
            .then(res => {
                console.log(res.data);
                loadBooks();
            }).catch(err => console.log(err));
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
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {!savedBooks || savedBooks.map((book) => (
                            <Grid item key={book._id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <img
                                            style={{ borderRadius: '9px', border: '1px solid #ddd'}}
                                            src={book.image}
                                            alt='book cover'
                                        />
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {book.title}
                                        </Typography>
                                        <Typography>
                                            {book.description}
                                        </Typography>
                                        <Typography variant="h5">
                                            {book.authors}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <a href={book.link}>More Info</a>
                                        </Button>
                                        <Button size="small" color="primary" onClick={() => handleDelete(book)}>
                                            Remove Book
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