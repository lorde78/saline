import React, { useEffect, useState } from "react";
import '../styles/slider.css';
import '../styles/style.css';

interface Slide {
    src: string;
    title: string;
}

interface SliderProps {
    slides: Slide[];
}

export const Slider: React.FunctionComponent<SliderProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [numVisibleSlides, setNumVisibleSlides] = useState(1);

    const breakpoints = [
        { width: 600, slides: 2 },
        { width: 900, slides: 3 },
        { width: 1100, slides: 4 },
    ];

    const calculateNumVisibleSlides = () => {
        const windowWidth = window.innerWidth;

        for (const breakpoint of breakpoints) {
            if (windowWidth >= breakpoint.width) {
                setNumVisibleSlides(breakpoint.slides);
            }
        }
    };

    const handleAutoplay = () => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % slides.length
            );
        }, 3000);
        return () => clearInterval(timer);
    };

    useEffect(() => {
        calculateNumVisibleSlides();
        handleAutoplay();
        const handleResize = () => {
            calculateNumVisibleSlides();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const generateDuplicatedSlides = () => {
        const duplicatedSlides = [];
        const totalSlides = slides.length;
        for (let i = 0; i < numVisibleSlides; i++) {
            for (let j = 0; j < totalSlides; j++) {
                const index = (currentIndex + j) % totalSlides;
                duplicatedSlides.push(slides[index]);
            }
        }
        return duplicatedSlides;
    };

    const duplicatedSlides = generateDuplicatedSlides();

    return (
        <div className="swiper_home_container">
            <div
                className={`custom-carousel visible-${numVisibleSlides}`}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index >= currentIndex && index < currentIndex + numVisibleSlides
                                ? 'active'
                                : ''
                            }`}
                    >
                        <img src={slide.src} alt={slide.title} />
                    </div>
                ))}
            </div>
            <div className="custom_text_socket_container">
                <div className="custom_text_socket">
                    Faites partie des meilleurs musiciens au monde.
                </div>
                <a className="button">La suite</a>
            </div>
        </div>
    );
};
