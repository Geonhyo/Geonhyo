import ResumeHeader from "@/components/resume/header";
import ResumeEducation from "@/components/resume/education";
import ResumeCareer from "@/components/resume/career";
import ResumeSkill from "@/components/resume/skill";

export default function Page() {
  return (
    <main className="mt-16 py-8 px-9 w-full h-fit flex flex-col justify-start items-center">
      <div className="w-full max-w-screen-lg h-fit flex flex-col justify-start items-center gap-y-12">
        <ResumeHeader />
        <ResumeEducation />
        <ResumeCareer />
        <ResumeSkill />
      </div>
    </main>
  );
}
