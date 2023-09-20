import type {V2_MetaFunction} from "@remix-run/node";
import Footer from "~/components/footer";
import Header from "~/components/header";
import {Slider} from "~/components/slider";
import {MiniSlider} from "~/components/mini_slider";
import {SectionInstrument} from "~/components/section_instrument";
import {SectionPartenaires} from "~/components/section_partenaires";
import {SectionSalinePlus} from "~/components/section_plus_saline";
import {Offre} from "~/components/section_formule";
import Builder_block_button from "~/kits/builder_block_button";
import resetStyles from "~/styles/reset.css";
import styles from "~/styles/style.css";
import builder from "~/styles/builder.css";
import input from "~/styles/input.css";
import slider from "~/styles/slider.css";
import mini_slider from "~/styles/mini_slider.css";
import styleRefacto from "~/styles/styleRefacto.css";
import Builder_select_folder from "~/kits/builder_select_folder";
import Select_image from "~/kits/select_image";
import {useGlobalEffect} from "~/helper/globalHelper";
// import InfiniteSlider from "~/components/infiniteSlider";



export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export function links() {
    return [
        {rel: 'stylesheet', href: resetStyles},
        {rel: 'stylesheet', href: styles},
        {rel: 'stylesheet', href: input},
        {rel: 'stylesheet', href: builder},
        {rel: 'stylesheet', href: slider},
        {rel: 'stylesheet', href: mini_slider},
        {rel: 'stylesheet', href: styleRefacto},
    ]
}



export default function Index() {
    useGlobalEffect("home");

    const slides = [
        {
            src: "/assets/images/first.png",
            title: "Image 1",
            name: "first guy",
            desc: "La la la la ala aalazifjfijf"
        },
        {
            src: "assets/images/1000x1500-pour-site14.png",
            title: "Image 2",
            name: "first guy",
            desc: "La la la la ala aalazifjfijf"
        },
        {
            src: "assets/images/1000x1500-pour-site18.png",
            title: "Image 3",
            name: "first guy",
            desc: "La la la la ala aalazifjfijf"
        },
        {
            src: "assets/images/1000x1500-pour-site22.png",
            title: "Image 4",
            name: "first guy",
            desc: "La la la la ala aalazifjfijf"
        },
        {
            src: "assets/images/1000x1500-pour-site23.png",
            title: "Image 5",
            name: "first guy",
            desc: "La la la la ala aalazifjfijf"
        },
        {
            src: "assets/images/1000x1500-pour-site48.png",
            title: "Image 6",
            name: "first guy",
            desc: "La la la la ala aalazifjfijf"
        },

    ];


    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
            <Header search={false}/>
             {/*<InfiniteSlider slides={slides}/> */}
            <Slider slides={slides}></Slider>
            <SectionInstrument/>
            <MiniSlider slides={slides}/>
            <Offre offres={[]}/>
            <SectionSalinePlus/>
            <SectionPartenaires/>
            <Footer/>
        </div>
    );
}
