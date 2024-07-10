import Hero from "@/components/hero";
import performanceImg from "public/images/puerta3.jpg";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt="Performances page"
        title="PIPI'S PERFORMANCE"
        titleStyle={{ fontFamily: "fantasy", color: "white" }}
      />
    </div>
  );
}
