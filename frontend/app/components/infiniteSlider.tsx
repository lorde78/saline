import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {NavLink} from "@remix-run/react";

interface Slide {
    src: string;
    title: string;
    name: string;
    desc: string;
}

interface Props {
    slides: Slide[];
}

export default function InfiniteSlider({slides}: Props) {
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        const speed = .5
        let offset = 0

        const moveSlider = () => {
            if (!slider) return
            offset += speed
            slider.style.transform = `translateX(-${offset}px)`
            if (offset >= slider.scrollWidth / 2) {
                offset = 0;
            }
            if (isAnimating) {
                requestAnimationFrame(moveSlider);
            }
        };

        setIsAnimating(true);
        moveSlider();

        return () => setIsAnimating(false);

    }, [isAnimating]);

    return (
        <div className={"top_page_container"}>
            <div className="infinite-slider-container">
                <div className="infinite-slider" ref={sliderRef}>
                    {slides.map((slide, index) => (
                        <img key={`slide-${index}`} src={slide.src} alt={slide.title}/>
                    ))}
                    {slides.map((slide, index) => (
                        <img key={`slide-copy-${index}`} src={slide.src} alt={slide.title}/>
                    ))}
                </div>
            </div>
            <div>
                <h1>
                    Faites partie des meilleurs
                    musiciens au monde.
                </h1>
                <NavLink to={"authentication"} className={"button"}>
                    Je m'inscris
                </NavLink>
            </div>
        </div>

    );
}
