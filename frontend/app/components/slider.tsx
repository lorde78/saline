import * as React from "react";
import "swiper/swiper-bundle.min.css";

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

    const defaultSlides: Slide[] = [
        {
            src: "path/to/image1.jpg",
            title: "Image 1",
        },
        {
            src: "path/to/image2.jpg",
            title: "Image 2",
        },
        {
            src: "path/to/image3.jpg",
            title: "Image 3",
        },
        // Add more images here
    ];

    const allSlides = slides.length > 0 ? slides : defaultSlides;

    return (
        <SwiperComponent
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper: any) => console.log(swiper)}
            effect="cube"
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
        >
            {allSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img src={slide.src} alt={slide.title} />
                </SwiperSlide>
            ))}
        </SwiperComponent>
    );
};
