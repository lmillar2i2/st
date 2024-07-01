import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';




const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/posts/')
      .then(response => setPosts(response.data))
  }, []);

  return (
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', minHeight: '20vh' }}>
        <Typography variant="h4" component="h1">
          Listar Posts
        </Typography>
        
        {posts.length === 0 ? (
          <Typography variant="h6">
            No hay posteos
          </Typography>
        ) : (
          <List>
            {posts.map(post => (
            <ListItem key={post.id}>
            <ListItemText>
              <Box component={Link} to={`/posts/${post.id}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
              - {post.title}
              </Box>
            </ListItemText>
            </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};

export default Posts;
