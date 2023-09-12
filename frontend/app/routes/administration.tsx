import React, { useState, useEffect } from 'react';
import CourseSearch from "~/components/filtersearch";

const AdminPage: React.FC = () => {
  
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

 
  useEffect(() => {
    const savedTags = localStorage.getItem('tags');
    if (savedTags) {
      setTags(JSON.parse(savedTags));
    }
  }, []);

 
  const ajouterTag = () => {
    if (inputValue.trim() !== '') {
      const newTags = [...tags, inputValue];
      setTags(newTags);
      setInputValue('');

      localStorage.setItem('tags', JSON.stringify(newTags));
    }
  };

 
  const supprimerTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);

    
    localStorage.setItem('tags', JSON.stringify(newTags));
  };

  return (
    <div>
      <h1>Page d'Administration</h1>
      <div>
        <label htmlFor="tagInput">Ajouter un Tag:</label>
        <input
          type="text"
          id="tagInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={ajouterTag}>Ajouter</button>
      </div>
      <div>
        {tags.map((tag) => (
          <div className="tag" key={tag} onClick={() => supprimerTag(tag)}>
            {tag}
          </div>
        ))}
      </div>
      <CourseSearch/>
    </div>
  );
};

export default AdminPage;
