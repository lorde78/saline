import React, { useState } from 'react';

interface Course {
  id: number;
  title: string;

}

interface CourseFilterProps {
  courses: Course[];
}

const CourseFilter: React.FC<CourseFilterProps> = ({ courses }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);

    // Filtrer les cours en fonction du texte de recherche
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredCourses(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un cours..."
        value={searchText}
        onChange={handleInputChange}
      />
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id}>{course.title}</li>
          // Affichez d'autres propriétés du cours si nécessaire
        ))}
      </ul>
    </div>
  );
};

export default CourseFilter;
