import Hero from "@/components/hero";
import homeImg from "public/images/puerta2.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        imgData={homeImg}
        imgAlt="peperonnis castle"
        title="PEPERONNI'S CASTLE"
        titleStyle={{ fontFamily: "fantasy", color: "rgb(178, 171, 202)" }}
      />
    </div>
  );
}
