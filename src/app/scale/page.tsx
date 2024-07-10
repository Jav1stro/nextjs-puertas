import Hero from "@/components/hero";
import scaleImg from "public/images/puerta1.jpg";

export default function ScalePage() {
  return (
    <div>
      <Hero
        imgData={scaleImg}
        imgAlt="Scales page"
        title="L'ASCALA DU PEPINO"
        titleStyle={{ fontFamily: "fantasy", color: "rgb(255, 255, 255)" }}
      />
    </div>
  );
}
