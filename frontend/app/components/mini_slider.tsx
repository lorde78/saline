import * as React from "react";
import "swiper/swiper-bundle.min.css";
import '../styles/mini_slider.css';
import '../styles/style.css';

interface Slide {
    src: string;
    title: string;
    name: string;
    desc: string;
}

interface SliderProps {
    slides: Slide[];
}

export const MiniSlider: React.FunctionComponent<SliderProps> = ({ slides }) => {
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
        <div className="mini_swiper_container">
            <h2>Progressez aux côtés des plus grands professeurs.</h2>
            <SwiperComponent
                slidesPerView={2}
                spaceBetween={20}
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
                        <div className="custom_text_socket_container">
                            <h3>{slide.name}</h3>
                            <span>{slide.desc}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </div>
    );
};
