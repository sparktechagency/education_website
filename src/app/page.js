import PopularVideo from "@/components/home/PopularVideo";
import Hero from "../components/home/Hero"
import SpecialVideo from "@/components/home/SpecialVideo";
import EducationArticle from "@/components/home/EducationArticle";
import FaqSection from "@/components/home/FaqSection";

export default function Home() {
  return (
    <div className="max-w-[1400px] m-auto ">
      <Hero></Hero>
      <PopularVideo></PopularVideo>
      <SpecialVideo></SpecialVideo>
      <EducationArticle></EducationArticle>
      <FaqSection></FaqSection>
    </div>
  );
}
