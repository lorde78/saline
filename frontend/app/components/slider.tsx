import * as React from "react";
import "swiper/swiper-bundle.min.css";

interface Slide {
    src: string;
    title: string;
}

interface SliderProps {
    slides: Slide[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
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

    return (
        <SwiperComponent
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper: any) => console.log(swiper)}
            effect="cube"
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            freeMode={true} // Add the freeMode property here
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img src={slide.src} alt={slide.title} />
                </SwiperSlide>
            ))}
        </SwiperComponent>
    );
};
