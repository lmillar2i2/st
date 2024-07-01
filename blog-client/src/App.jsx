import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/posts" style={{ textDecoration: 'none', color: 'inherit' }}>Listado Posts</Link>
          </Button>
          <Button color="inherit">
            <Link to="/posts/create" style={{ textDecoration: 'none', color: 'inherit' }}>Crear Post</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
