import React, { useState, useEffect } from 'react';
import '../styles/taglist.css';
import '../styles/input.css';

const TagList = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const tagData = {
        id: 9,
        title: "Un super cours !",
        description: "Bienvenue dans notre super cours! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        numberSteps: null,
        steps: null,
        difficultyLevel: "4",
        nbViews: 0,
        nbCompleted: 0,
        userId: 4,
        bannerPicture: "https://previews.123rf.com/images/vishalgokulwale/vishalgokulwale1503/vishalgokulwale150300001/37908967-bleu-dessin-anim%C3%A9-caract%C3%A8re-pouce-pose.jpg",
        author: {
            name: "TEST",
            firstName: "Test"
        },
        trainings: [],
        tags: [
            {
                id: 4,
                name: "violon"
            },
            {
                id: 8,
                name: "baroque"
            }
        ]
    };

    useEffect(() => {
        if (tagData.tags) {
            setTags(tagData.tags.map((tag) => tag.name));
        }
    }, []);

    const ajouterTag = () => {
        if (inputValue.trim() !== '' && !tags.includes(inputValue)) {
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
        <section className='tag_list_container'>
            <div className='tag_list_input'>
                {/* <label htmlFor="tagInput">Ajouter un Tag:</label> */}
                <input
                    type="text"
                    id="tagInput"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className='input'
                />
                <button className="button" onClick={ajouterTag}>Ajouter</button>
            </div>
            <div className='tag_list_result'>
                {tags.map((tag) => (
                    <div className="tag" key={tag} onClick={() => supprimerTag(tag)}>
                        {tag}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TagList;
