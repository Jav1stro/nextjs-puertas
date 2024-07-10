import Hero from "@/components/hero";
import reliabilityImg from "public/images/door-window-wooden-blue.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        imgData={reliabilityImg}
        imgAlt="Reliability page"
        title="LA REALIBILILIDIDAD DU PEDRO"
        titleStyle={{ fontFamily: "fantasy", color: "white" }}
      />
    </div>
  );
}
