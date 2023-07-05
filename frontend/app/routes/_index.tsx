import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";
import Header from "~/components/header";
import { Slider } from "~/components/slider";

const images = [
  { src: "/path/to/image1.jpg", title: "Image 1" },
  { src: "/path/to/image2.jpg", title: "Image 2" },
  { src: "/path/to/image3.jpg", title: "Image 3" },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const items = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header title={""} />
      <Slider slides={images} />
      <Footer />
    </div>
  );
}
