import React, { useState, useEffect } from 'react';
import CourseSearch from "~/components/filtersearch";
import TagList from '~/components/taglist';

const AdminPage: React.FC = () => {
  
  return (
    <div>
      <h1>Page d'Administration</h1>
      <TagList />
      <CourseSearch/>
    </div>
  );
};

export default AdminPage;
