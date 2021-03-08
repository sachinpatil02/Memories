import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography,Toolbar, Grow, Grid, CssBaseline,Button } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';

import Link from '@material-ui/core/Link';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
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

  return (
    <>
    <CssBaseline />

    <AppBar position="fixed" >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link variant="button" color="inherit" href="/" className={classes.link}>Memories layout</Link>
          </Typography>
          <nav>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="inherit" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <div className={classes.heroContent}>
          <Container maxWidth="lg">
            
            {/* <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
              <img className={classes.image} src={memories} alt="icon" height="60" />
            </AppBar> */}
            <Grow in>
              <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId} />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                  </Grid>
                </Grid>
              </Container>
            </Grow>
            
          </Container>
          {/* Footer */}
          <footer className={classes.footer}>
              <Typography variant="h6" align="center" gutterBottom>
                Footer
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
              </Typography>
              <Copyright />
            </footer>
            {/* End footer */}
        </div></>
  );
};

export default App;
