import PopularVideo from "@/components/home/PopularVideo";
import Hero from "../components/home/Hero"
import SpecialVideo from "@/components/home/SpecialVideo";
import EducationArticle from "@/components/home/EducationArticle";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <PopularVideo></PopularVideo>
      <SpecialVideo></SpecialVideo>
      <EducationArticle></EducationArticle>
    </div>
  );
}
