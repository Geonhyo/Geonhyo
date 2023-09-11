import Role from "./role";
import Skill from "./skill";

export interface ProjectPreview {
  projectId: number;
  name: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  startedAt: Date;
  endedAt?: Date;
  memberNum: number;
  viewNum: number;
  likeNum: number;
  isOnService: boolean;
  isTeamLeader: boolean;
  url?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  googleStoreUrl?: string;
  tags: string[];
  tasks: string[];
  skills: Skill[];
  roles: Role[];
}
