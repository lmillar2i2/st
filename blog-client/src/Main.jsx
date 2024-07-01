import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
//import './index.css';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}><CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/" replace />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetail />} />
        <Route path="posts/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </Router>
    </ThemeProvider>
  </React.StrictMode>
);

