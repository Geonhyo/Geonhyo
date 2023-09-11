import Role from "@/model/role";

type Props = {
  projectId: number;
  role: Role;
};

export default function MainProjectItemRole({ projectId, role }: Props) {
  const parentId = `main-project_${projectId}-item`;
  const buttonStyle = {
    backgroundColor: role.colorHex,
  };
  return (
    <button
      type="button"
      title={role.label}
      id={`${parentId}-role`}
      style={buttonStyle}
      className={`px-2 py-0.5 bg-[${parseInt(role.colorHex, 16)}] shadow-sm`}
    >
      <p className="text-base font-normal text-black"># {role.label}</p>
    </button>
  );
}
