import React, {useRef, useState} from "react";
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
    const [ books, setBooks ] = useState([]);
    const searchRef = useRef();

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