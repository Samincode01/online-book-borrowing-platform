import Choose from "@/components/ui/ChooseStore/Choose";
import WhyChooseUs from "@/components/ui/ChooseStore/Choose";
import Headline from "@/components/ui/headline/Headline";
import Hero from "@/components/ui/hero/Hero";
import NavBar from "@/components/ui/NavBar";
import Review from "@/components/ui/review/Review";
import TopPicks from "@/components/ui/TopPicks/TopPicks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Headline></Headline>
      <Hero></Hero>
      <TopPicks></TopPicks>
      <Choose></Choose>
      <Review></Review>
      
    </div>
  );
}
