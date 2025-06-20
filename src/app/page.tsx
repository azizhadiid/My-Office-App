import BenefitSection from "@/components/BenefitSection";
import Header from "@/components/Header";
import Navbar from "@/components/Navabar";
import CitiSections from "@/features/cities/sections/CitiSections";
import FeachSpaceSections from "@/features/offices/sections/FeachSpaceSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CitiSections />
      <BenefitSection />
      <FeachSpaceSections />
    </>
  );
}
