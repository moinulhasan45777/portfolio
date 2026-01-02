import HomeHero from "@/components/HomeHero";
import MyAchievements from "@/components/MyAchievements";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <main>
      <HomeHero></HomeHero>
      <Overview></Overview>
      <MyAchievements></MyAchievements>
    </main>
  );
}
