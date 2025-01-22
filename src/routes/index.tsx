import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../components/Home';
import PostPage from '../components/PostDetail';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostPage />} />
      {/* <Route path="*" element={<NotFoundPage />} />  */}
    </Routes>
  );
};

export default AppRoutes;
