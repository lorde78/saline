import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Builder_block_button from "~/kits/builder_block_button";
import "~/styles/reset.css"
import "~/styles/style.css"
import "~/styles/builder.css"
export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  console.log("Index")
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Builder_block_button  contents={"Vidéo"} icon={"ri-vidicon-line"}/>
    </div>
  );
}
