export default function MainHistoryItemCircle({
  id,
  isActive,
  className,
}: {
  id: string;
  isActive: boolean;
  className: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`${className}`}
    >
      <circle cx="12" cy="12" r="10" stroke="#1D74F8" stroke-width="4" />
      {isActive && (
        <path
          d="M4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893"
          stroke="#FF971E"
          stroke-width="4"
        />
      )}
    </svg>
  );
}
