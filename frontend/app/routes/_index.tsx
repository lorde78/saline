import type {V2_MetaFunction} from "@remix-run/node";
import Footer from "~/components/footer";
import Header from "~/components/header";
import { Slider } from "~/components/slider";
import { SectionInstrument } from "~/components/section_instrument";
import { SectionPartenaires } from "~/components/section_partenaires";
import { SectionSalinePlus } from "~/components/section_plus_saline";
import Builder_block_button from "~/kits/builder_block_button";
import resetStyles from "~/styles/reset.css"
import styles from "~/styles/style.css"
import builder from "~/styles/builder.css"
import input from "~/styles/input.css"
import Builder_select_folder from "~/kits/builder_select_folder";
import Select_image from "~/kits/select_image";

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
        {rel:'stylesheet', href: input},
        {rel: 'stylesheet', href: builder}
    ]
}

export default function Index() {
  const slides = [
    {
      src: "/assets/images/first.png",
      title: "Image 1",
    },
    {
      src: "assets/images/1000x1500-pour-site14.png",
      title: "Image 2",
    },
    {
      src: "assets/images/1000x1500-pour-site18.png",
      title: "Image 3",
    },
    {
      src: "assets/images/1000x1500-pour-site22.png",
      title: "Image 4",
    },
    {
      src: "assets/images/1000x1500-pour-site23.png",
      title: "Image 5",
    },
    {
      src: "assets/images/1000x1500-pour-site48.png",
      title: "Image 6",
    },

  ];

 
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header title={""} />
      <Slider slides={slides} />
      <SectionInstrument />
      <SectionPartenaires />
      <SectionSalinePlus />
      <Footer />
    </div>
  );
}
