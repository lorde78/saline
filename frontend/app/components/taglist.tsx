import React, { useState } from 'react';


function TagList() {
    const [tags, setTags] = useState<string[]>([]);
    const [newTag, setNewTag] = useState<string>('');

    const addTag = () => {
        if (newTag.trim() !== '') {
            setTags([...tags, newTag]);
            setNewTag('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        const updatedTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(updatedTags);
    };

    return (
        <section>
            <div>
                <h2>Liste Tags Musicaux</h2>
                <div>
                    <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                    />
                    <button onClick={addTag}>+</button>
                </div>
            </div>
            <div>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            {tag}
                            <button onClick={() => removeTag(tag)}>-</button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default TagList;
