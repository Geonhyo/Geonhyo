"use client";

import { ProjectPreview } from "@/model/project";
import Image from "next/image";
import MainProjectItemLink from "./main-project-item-link";
import SkillButton from "@/components/button/skill-button";

type Props = {
  totalNum: number;
  index: number;
  project: ProjectPreview;
};

const gradientList = [
  "linear-gradient(90deg, #98FFF9 0%, #91AEFA 100%)",
  "linear-gradient(90deg, #D5FFB5 0%, #B5FFDB 100%)",
];

export default function MainProjectItem({ totalNum, index, project }: Props) {
  const id = `main-project_${project.projectId}`;
  const s3 = process.env.NEXT_PUBLIC_S3;
  // const [isCurrentItem, setIsCurrentItem] = useState(false);
  // const duration = 300;
  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: "-50% 0% -50% ",
  //   };

  //   const observer = new IntersectionObserver((items) => {
  //     if (items.length === 0) return;
  //     const item = items[0];

  //     if (item.isIntersecting) {
  //       setIsCurrentItem(true);
  //     } else {
  //       setIsCurrentItem(false);
  //     }
  //   }, observerOptions);

  //   const item = document.getElementById(id);

  //   item && observer.observe(item);

  //   return () => {
  //     item && observer.unobserve(item);
  //   };
  // }, [id, duration]);
  return (
    <ul
      key={id}
      id={id}
      className={`w-full h-fit flex flex-col justify-center items-center px-16 py-16 gap-6`}
    >
      <li
        id={`${id}_tag_list`}
        className="w-full max-w-screen-xl flex flex-row justify-start gap-3"
      >
        {project.tags.map((tag, idx) => (
          <ul
            key={`${id}_tag_item_${idx}`}
            id={`${id}_tag_item_${idx}`}
            className={`text-4xl font-bold text-black`}
          >
            {`# ${tag}`}
          </ul>
        ))}
      </li>
      <div
        id={`${id}_main`}
        style={{
          background: gradientList[index % gradientList.length],
        }}
        className="w-full h-full rounded-3xl px-16 py-6 gap-6 flex flex-col justify-start items-center overflow-hidden"
      >
        <li
          id={`${id}_main_skill_list`}
          className="w-full flex flex-row gap-2 justify-center grow-0 shrink-0 overflow-x-scroll"
        >
          {project.skills.map((skill, idx) => (
            <SkillButton
              key={`${id}_main_skill_item_${idx}`}
              id={`${id}_main_skill_item_${idx}`}
              skill={skill}
            />
          ))}
        </li>
        <div
          id={`${id}_main_content`}
          className="w-full h-full flex flex-row items-between gap-6 justify-center overflow-y-scroll"
        >
          <div
            id={`${id}_main_info`}
            className="w-full h-min my-auto flex flex-col justify-start items-start gap-3 text-black leading-normal"
          >
            <li
              id={`${id}_main_speciality_list`}
              className="w-full flex flex-row gap-3 items-start"
            >
              {project.isOnService && (
                <ul
                  id={`${id}_main_on-service`}
                  className="w-fit h-full px-2 py-1 rounded-md text-base font-bold text-white bg-green"
                >
                  On Service
                </ul>
              )}
              {project.isTeamLeader && (
                <ul
                  id={`${id}_main_team-leader`}
                  className="w-fit h-full px-2 py-1 rounded-md text-base font-bold text-white bg-orange"
                >
                  Team Leader
                </ul>
              )}
            </li>
            <div
              id={`${id}_main_title`}
              className="w-full text-4xl font-bold whitespace-pre-wrap"
            >
              {project.title}
            </div>
            <div
              id={`${id}_main_description`}
              className="w-full text-base font-bold whitespace-pre-wrap"
            >
              {project.description}
            </div>
            <li
              id={`${id}_main_task_list`}
              className="w-full flex flex-col gap-2 items-start"
            >
              {project.tasks.map((task, idx) => (
                <ul
                  id={`${id}_main_task_item_${idx}`}
                  key={`${id}_main_task_item_${idx}`}
                  className="w-full text-lg font-bold whitespace-pre-wrap overflow-y-hidden"
                >
                  {`✔️ ${task}`}
                </ul>
              ))}
            </li>
          </div>
          <Image
            src={`${s3}/${project.thumbnailUrl}`}
            alt={`${project.title} 썸네일 이미지`}
            title={project.title}
            id={`${id}_main_content_image`}
            width={480}
            height={270}
            className="w-[480px] h-[270px] my-auto aspect-video rounded-xl grow-0 shrink-0"
          />
        </div>
        <li
          id={`${id}_main_url_list`}
          className="w-full flex flex-row gap-6 justify-center"
        >
          {project.githubUrl && (
            <MainProjectItemLink
              id={`${id}_main_url_github`}
              type="github"
              href={project.githubUrl}
            />
          )}
          {project.url && (
            <MainProjectItemLink
              id={`${id}_main_url_web`}
              type="url"
              href={project.url}
            />
          )}
          {project.appStoreUrl && (
            <MainProjectItemLink
              id={`${id}_main_url_ios`}
              type="appStore"
              href={project.appStoreUrl}
            />
          )}
          {project.googleStoreUrl && (
            <MainProjectItemLink
              id={`${id}_main_url_android`}
              type="googleStore"
              href={project.googleStoreUrl}
            />
          )}
        </li>
      </div>
      <div
        id={`${id}_index`}
        className="border-2 border-black rounded-xl w-fit h-fit my-1 px-3 py-1"
      >
        <p className="text-base font-black text-black">{`${
          index + 1
        }/${totalNum}`}</p>
      </div>
    </ul>
    // <div
    //   id={id}
    //   className={`w-full h-fit ${
    //     isCurrentItem
    //       ? "animate-showProjectDetail py-6"
    //       : "animate-hideProjectDetail px-9 py-3"
    //   }`}
    // >
    //   <div className="cursor-pointer w-full p-6 border-base border-black/70 rounded-2xl flex flex-col items-center shadow-md whitespace-pre-line bg-white">
    //     {isCurrentItem && (
    //       <div
    //         id={`${id}-role`}
    //         className="w-full flex flex-row items-center pb-6"
    //       >
    //         <div className="w-40 shrink-0" />
    //         <div className="w-full flex flex-row justify-center gap-3">
    //           {project.roles.map((role, idx) => (
    //             <MainProjectItemRole
    //               key={`${role.roleId}_${idx}`}
    //               role={role}
    //               projectId={project.projectId}
    //             />
    //           ))}
    //         </div>
    //         <div className="w-40 shrink-0 flex flex-row justify-end items-center gap-2">
    //           <Image src={ClickIcon} alt="조회수" width={24} height={24} />
    //           <p className="text-sm font-normal text-black">
    //             {project.viewNum}
    //           </p>
    //         </div>
    //       </div>
    //     )}
    //     <div
    //       id={`${id}-main`}
    //       className={`w-full h-fit shrink flex flex-row gap-6 items-stretch`}
    //     >
    //       <Image
    //         id={`${id}-thumbnail`}
    //         src={`${s3}/${project.thumbnailUrl}`}
    //         alt={`${project.title} 썸네일 이미지`}
    //         title={project.title}
    //         width={isCurrentItem ? 480 : 240}
    //         height={isCurrentItem ? 270 : 135}
    //         style={{ objectFit: "cover" }}
    //         loading="lazy"
    //         className={`${
    //           isCurrentItem ? "w-120 h-auto" : "w-60 h-auto"
    //         } aspect-video grow-0 shrink-0 bg-white rounded-xl border-base border-black/30`}
    //       />
    //       <div
    //         id={`${id}-main-content`}
    //         className={`shrink w-full h-auto flex flex-col items-stretch ${
    //           isCurrentItem ? "justify-center gap-4 py-3" : "justify-between"
    //         } overflow-hidden`}
    //       >
    //         <div
    //           id={`${id}-main-content-header`}
    //           className="w-full flex flex-row gap-3"
    //         >
    //           <div
    //             id={`${id}-main-content-header-info`}
    //             className="w-full flex flex-row gap-2"
    //           >
    //             {project.isOnService && (
    //               <div
    //                 id={`${id}-main-content-header-onSesrvice`}
    //                 className="px-2 rounded-full bg-green"
    //               >
    //                 <p className="text-sm font-normal text-white">On Service</p>
    //               </div>
    //             )}
    //           </div>
    //           {!isCurrentItem && (
    //             <div className=" grow-0 shrink-0 flex flex-row justify-end items-center gap-4 text-sm font-normal text-black">
    //               <div className="grow-0 shrink-0 flex flex-row justify-end items-center gap-2">
    //                 <Image
    //                   src={ClickIcon}
    //                   alt="조회수"
    //                   width={24}
    //                   height={24}
    //                 />
    //                 <p>{project.viewNum}</p>
    //               </div>
    //               <div className="grow-0 shrink-0 flex flex-row justify-end items-center gap-2">
    //                 <Image src={LikeIcon} alt="응원수" width={24} height={24} />
    //                 <p>{project.viewNum}</p>
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //         <div
    //           id={`${id}-main-content-main`}
    //           className={`w-full shrink flex flex-col ${
    //             isCurrentItem && "gap-2"
    //           }`}
    //         >
    //           <h1
    //             id={`${id}-main-title`}
    //             className={`${
    //               isCurrentItem ? "text-2xl" : "text-lg"
    //             } font-bold text-black line-clamp-1 text-ellipsis`}
    //           >
    //             {project.title}
    //           </h1>
    //           <p
    //             id={`${id}-main-peroid`}
    //             className="text-base font-normal text-black line-clamp-1 text-ellipsis"
    //           >
    //             {DateUtil.dateToYMString(project.startedAt)}&nbsp;~&nbsp;
    //             {project.endedAt
    //               ? `${DateUtil.dateToYMString(project.endedAt!)}`
    //               : `진행 중`}
    //             &nbsp;({DateUtil.getYMDiff(project.startedAt, project.endedAt)})
    //           </p>
    //           <p
    //             id={`${id}-main-description`}
    //             className="w-full text-base font-normal text-black line-clamp-2 text-ellipsis"
    //           >
    //             {isCurrentItem && project.description}
    //           </p>
    //         </div>
    //         <div
    //           id={`${id}-main-skills`}
    //           className={`w-full h-full flex ${
    //             isCurrentItem ? "flex-wrap" : "flex-row overflow-x-auto"
    //           } items-end gap-2 overflow-visible`}
    //         >
    //           {project.skills.map((skill, idx) => (
    //             <MainProjectItemSkill
    //               key={`${skill.skillId}_${idx}`}
    //               projectId={project.projectId}
    //               skill={skill}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     {isCurrentItem && (
    //       <div
    //         id={`${id}-bottom`}
    //         className="w-full flex flex-row gap-4 items-end"
    //       >
    //         <button
    //           id={`${id}-more-button`}
    //           type="button"
    //           className="w-full py-3 rounded-full shadow-md bg-blue"
    //         >
    //           <p className="self-center text-base font-normal text-white">
    //             자세히 보기
    //           </p>
    //         </button>
    //         <div
    //           id={`${id}-like`}
    //           className="flex flex-col gap-1 items-center animate-bounce"
    //         >
    //           <p
    //             id={`${id}-like-num`}
    //             className="w-full text-center text-sm font-normal text-black line-clamp-1 text-ellipsis"
    //           >
    //             {project.likeNum}
    //           </p>
    //           <button
    //             id={`${id}-like-button`}
    //             type="button"
    //             title="응원하기"
    //             className="p-3 border-base border-black/70 rounded-full bg-white shadow-sm"
    //           >
    //             <Image src={LikeIcon} alt="응원하기" width={24} height={24} />
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}
