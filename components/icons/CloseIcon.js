const CloseIcon = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M 1.4089671,22.591033 22.591033,1.4089671" />
        <path d="M 22.591033,22.591033 1.4089671,1.4089671" />
      </g>
    </svg>
  );
};

export default CloseIcon;
