import * as React from "react";
import "swiper/swiper-bundle.min.css";
import '../styles/mini_slider.css';
import '../styles/style.css';

interface Offre {
    title: string;
    type: string;
    desc: string;
}

interface SliderProps {
    slides: Offre[];
}

export const Offre: React.FunctionComponent<SliderProps> = ({ slides }) => {
    const [Swiper, setSwiper] = React.useState<any>(null);

    React.useEffect(() => {
        import("swiper/react").then((module) => {
            setSwiper(module);
        });
    }, []);

    if (!Swiper) {
        return null;
    }
    const check = <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0.341888C14.6095 -0.0486359 13.9763 -0.0486359 13.5858 0.341888L6.34068 7.58699C5.95016 7.97752 5.31699 7.97752 4.92647 7.58699L2.38507 5.04559C1.99454 4.65507 1.36138 4.65507 0.970855 5.04559C0.580331 5.43612 0.58033 6.06928 0.970855 6.45981L3.51774 9C4.68969 10.1689 6.58688 10.1677 7.7574 8.9974L15 1.7561C15.3905 1.36558 15.3905 0.732413 15 0.341888Z" fill="white" />
    </svg>

    const { Swiper: SwiperComponent, SwiperSlide } = Swiper;

    const defaultSlides: Offre[] = [];

    const allSlides = slides.length > 0 ? slides : defaultSlides;

    return (
        <div className="mini_swiper_container">
            <h2>Choissez votre formule</h2>
            <SwiperComponent
                slidesPerView={1}
                spaceBetween={20}
            >
                {allSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <h3>{slide.title}</h3>
                        <span>{slide.type}</span>
                        <span>{slide.desc}</span>
                        {/* {check} */}
                        <button className='button'>Sourscrire</button>
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </div>
    );
};
