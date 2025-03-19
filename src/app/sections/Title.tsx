import Image from "next/image";

import dictionary from "../../dictionary.json"
import { fontTitle } from "../fonts";


const Title = () => {
  return <div
    className="section-banner h-full overflow-hidden snow-content">
    <h1
      style={{ fontSize: "4rem", lineHeight: "4rem" }}
      className={`${fontTitle.className} text-blue text-center`}>
      {dictionary.sections.title.title[0]}
    </h1>
    <h2
      style={{ fontSize: "3rem", textShadow: "0 1px #333" }}
      className={`${fontTitle.className} text-yellow text-center `}>
      {dictionary.weddingInfo.date}
    </h2>
    <Image
      src="/wedding-couple.svg"
      alt="logo"
      width={0}
      height={0}
      sizes={"50vh"}
      className="w-full"
      style={{ height: "50vh" }}
    />
  </div>
}

export default Title