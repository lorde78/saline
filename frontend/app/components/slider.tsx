import * as React from "react";
import "swiper/swiper-bundle.min.css";
import '../styles/slider.css';

interface Slide {
    src: string;
    title: string;
}

interface SliderProps {
    slides: Slide[];
}

export const Slider: React.FunctionComponent<SliderProps> = ({ slides }) => {
    const [Swiper, setSwiper] = React.useState<any>(null);

    React.useEffect(() => {
        import("swiper/react").then((module) => {
            setSwiper(module);
        });
    }, []);

    if (!Swiper) {
        return null;
    }

    const { Swiper: SwiperComponent, SwiperSlide } = Swiper;

    const defaultSlides: Slide[] = [];

    const allSlides = slides.length > 0 ? slides : defaultSlides;

    return (
        <SwiperComponent
            slidesPerView={1}
        >
            {allSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img src={slide.src} alt={slide.title} />
                </SwiperSlide>
            ))}
        </SwiperComponent>
    );
};
