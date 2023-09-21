import React, { ChangeEvent, useState, useEffect } from 'react';
import '../styles/input.css';
import '../styles/filtersearch.css';
import "../styles/reset.css";
import { Link } from '@remix-run/react';

interface Course {
    id: number;
    title: string;
    description: string;
    numberSteps: number | null;
    steps: any[] | null;
    difficultyLevel: string;
    nbViews: number;
    nbCompleted: number;
    userId: number;
    bannerPicture: string;
    author: {
        name: string;
        firstName: string;
    };
    trainings: any[];
    tags: { id: number; name: string }[];
}

const CourseSearch: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [courses, setCourses] = useState<Course[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const jsonData: Course[] = [
            {
                "id": 9,
                "title": "Un super cours !",
                "description": "Bienvenue dans notre super cours! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "numberSteps": null,
                "steps": null,
                "difficultyLevel": "4",
                "nbViews": 0,
                "nbCompleted": 0,
                "userId": 4,
                "bannerPicture": "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
                "author": {
                    "name": "TEST",
                    "firstName": "Test"
                },
                "trainings": [],
                "tags": [
                    {
                        "id": 4,
                        "name": "violon"
                    },
                    {
                        "id": 8,
                        "name": "baroque"
                    }
                ]
            },
            {
                "id": 14,
                "title": "Cours de Science de Données",
                "description": "Explorez le monde de la science des données et apprenez à extraire des informations précieuses à partir des données.",
                "numberSteps": null,
                "steps": null,
                "difficultyLevel": "3",
                "nbViews": 180,
                "nbCompleted": 55,
                "userId": 9,
                "bannerPicture": "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
                "author": {
                    "name": "Sarah Lee",
                    "firstName": "Sarah"
                },
                "trainings": [],
                "tags": [
                    { "id": 33, "name": "science des données" },
                    { "id": 34, "name": "analyse de données" }
                ]
            },
            {
                "id": 13,
                "title": "Cours de Développement Web Full-Stack",
                "description": "Devenez un développeur web Full-Stack compétent en apprenant les dernières technologies web. Créez des applications web complexes de bout en bout.",
                "numberSteps": null,
                "steps": null,
                "difficultyLevel": "4",
                "nbViews": 200,
                "nbCompleted": 75,
                "userId": 8,
                "bannerPicture": "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
                "author": {
                    "name": "Michael Brown",
                    "firstName": "Michael"
                },
                "trainings": [],
                "tags": [
                    { "id": 31, "name": "développement web" },
                    { "id": 32, "name": "full-stack" }
                ]
            },
            {
                "id": 12,
                "title": "Cours de Langues Étrangères",
                "description": "Apprenez de nouvelles langues et explorez différentes cultures à travers les mots.",
                "numberSteps": null,
                "steps": null,
                "difficultyLevel": "2",
                "nbViews": 90,
                "nbCompleted": 30,
                "userId": 7,
                "bannerPicture": "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
                "author": {
                    "name": "Emily Johnson",
                    "firstName": "Emily"
                },
                "trainings": [],
                "tags": [
                    { "id": 29, "name": "langues" },
                    { "id": 30, "name": "culture" }
                ]
            }

        ];
        setCourses(jsonData);
        setFilteredCourses(jsonData);
    }, []);

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        setIsLoading(true);

        const filtered = filterCourses(query);

        setTimeout(() => {
            setFilteredCourses(filtered);
            setShowSuggestions(query.length > 0);
            setIsLoading(false);
        }, 1000);

    };

    const filterCourses = (query: string) => {
        return courses.filter((course) => {

            return (
                course.title.toLowerCase().includes(query.toLowerCase()) ||
                course.description.toLowerCase().includes(query.toLowerCase()) ||
                course.tags.some((tag) => tag.name.toLowerCase().includes(query.toLowerCase()))
            );
        });
    };

    function truncateText(text: string, maxLength: number) {
        if (text.length <= maxLength) {
          return text;
        }
        return text.slice(0, maxLength) + '...';
      }

    return (
        <div className='filtersearch_container'>
            <h1>Recherche de Cours</h1>
            <input
                type="text"
                placeholder="Rechercher un cours..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className='input'
            />
            {isLoading && <div className="loader_cours">Chargement</div>}
            {showSuggestions && (
            <ul>
                {filteredCourses.length === 0 ? (
                    <li className='recherche_item'>
                        <p>Aucune donnée ne correspond à votre recherche.</p>
                    </li>
                ) : (
                    filteredCourses.map((course) => (
                        <li key={course.id} className='recherche_item'>
                            <Link to={''} className='recherche_item_interieur'>
                                <div className='recherche_item_interieur_img'><img src={course.bannerPicture} alt="" /></div>
                                <div className='recherche_item_interieur_content'>
                                    <h2>{course.title}</h2>
                                    <div className='recherche_list_tag'>
                                        {course.tags.map((tag) => (
                                            <div key={tag.id}><span className="tag">{tag.name}</span></div>
                                        ))}
                                    </div>
                                    <p>{truncateText(course.description, 120)}</p>
                                    <p className={"button "}>Cliquer pour lire la suite</p>
                                </div>
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        )}
        </div>
    );
};

export default CourseSearch;