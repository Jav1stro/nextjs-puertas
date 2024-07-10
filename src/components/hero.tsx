import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
  titleStyle: {};
}
export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-100"></div> */}
      <div className="pt-48 flex justify-center items-center">
        <h1
          className="text-6xl"
          style={props.titleStyle}
        >
          {props.title}
        </h1>
      </div>
    </div>
  );
}
