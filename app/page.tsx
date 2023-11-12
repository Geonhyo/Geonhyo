import MainBanner from "@/components/main/banner/banner";
import MainAboutMe from "@/components/main/about-me";
import MainSkills from "@/components/main/skills";
import MainProjects from "@/components/main/projects/projects";
import MainStepBar from "@/components/main/step-bar";

export default async function MainPage() {
  return (
    <main className="w-full flex flex-col justify-start items-center h-fit">
      <MainStepBar />
      <MainBanner />
      <MainAboutMe />
      <MainSkills />
      <MainProjects />
    </main>
  );
}
