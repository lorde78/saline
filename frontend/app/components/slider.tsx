import * as React from "react";
import "swiper/swiper-bundle.min.css";
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
        <div className="swiper_home_container">
            <SwiperComponent
                slidesPerView={1}
                autoplay={{  
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                }}
            >
                {allSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide.src} alt={slide.title} />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
            <div className="custom_text_socket_container">
                <div className="custom_text_socket">
                    Faites partie des meilleurs
                    musiciens au monde.
                </div>
                <a className="button">La suite</a>
            </div>
        </div>
    );
};
