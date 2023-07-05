import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";
import Header from "~/components/header";
// import { Slider } from "~/components/slider";


export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // const slides = [
  //   {
  //     src: banner,
  //     title: "Image 1",
  //   },
  //   {
  //     src: "path/to/image2.jpg",
  //     title: "Image 2",
  //   },
  //   {
  //     src: "path/to/image3.jpg",
  //     title: "Image 3",
  //   },
  //   // Add more slide objects as needed
  // ];
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header title={""} />
      {/* <Slider slides={slides} /> */}
     
      <Footer />
    </div>
  );
}
