import { ProjectPreview } from "@/model/project";
import MainProjectItem from "@/components/main/project/main-project-item";

type Props = {
  projectList: ProjectPreview[];
};
export default async function MainProjectList({ projectList }: Props) {
  return (
    <li id="main-project-list" className="w-full flex flex-col items-stretch">
      <p></p>
      {projectList.map((project, idx) => (
        <MainProjectItem
          key={`${project.projectId}_${idx}`}
          totalNum={projectList.length}
          index={idx}
          project={project}
        />
      ))}
    </li>
  );
}
