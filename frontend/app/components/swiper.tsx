import React, { useEffect, useState } from 'react';
import 'swiper/css/swiper.min.css';

interface Image {
    id: number;
    name: string;
    path: string;
}

const SwiperComponent: React.FC = () => {
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        fetch('./public/professeurs.json')
            .then((response) => response.json())
            .then((data) => setImages(data))
            .catch((error) => console.error('Error fetching images:', error));
    }, []);

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {images.map((image) => (
                    <div className="swiper-slide" key={image.id}>
                        <img src={image.path} alt={image.name} />
                    </div>
                ))}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default SwiperComponent;
