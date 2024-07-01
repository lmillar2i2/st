import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/posts/${id}/`)
      .then(response => setPost(response.data))
      .catch(error => setError('Post no encontrado'));
  }, [id]);

  if (error) {
    return <Container><Typography variant="h6">{error}</Typography></Container>;
  }

  return (
    <Container>
      {post !== null ? (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', minHeight: '20vh' }}> 
          <Typography variant="h4" gutterBottom>Título: {post.title}</Typography>
          <Typography variant="body1" gutterBottom><strong>Contenido:</strong> {post.content}</Typography>
          <Typography variant="body1" gutterBottom><strong>Autor:</strong> {post.author}</Typography>
          <Typography variant="body2" gutterBottom><strong>Fecha de creación:</strong> {new Date(post.created_at).toLocaleString()}
          </Typography>
        </Box>
      ) : (
        <Typography variant="h6">No hay posteos</Typography>
      )}
    </Container>
  );
};

export default PostDetail;
