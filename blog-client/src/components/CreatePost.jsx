import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/posts/create/', {
      title,content,author
    })
    .then(response => navigate(`/posts/${response.data.id}`))
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1">
        Crear Post
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Título" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <TextField label="Contenido" value={content} onChange={(e) => setContent(e.target.value)} required multiline rows={4} />
        <TextField label="Autor"value={author} onChange={(e) => setAuthor(e.target.value)} required/>
        <Button type="submit" variant="contained" color="primary">
          Postear
        </Button>
      </Box>
    </Container>
  );
};

export default CreatePost;
