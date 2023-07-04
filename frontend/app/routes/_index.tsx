import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";
import Header from "~/components/header";

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
      <Header title={""}/>
      <Footer />
    </div>
  );
}
