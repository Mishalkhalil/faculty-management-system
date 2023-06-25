const Close = ({ fill, size, height, width, ...props }) => {
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
        <path d="M 1.2425296,4.1488867 H 22.75747" />
        <path d="M 1.2425291,19.796116 H 22.757471" />
        <path d="M 1.2425292,11.972501 H 22.757471" />
      </g>
    </svg>
  );
};

export default Close;

{
  /* <svg
   width="24"
   height="24"
   viewBox="0 0 24 24"
   version="1.1">
  <g>
      <path
         style="fill:#333333;stroke:#000000;stroke-width:0.623622;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
         d="M 1.2425296,4.1488867 H 22.75747"
         id="path2546" />
      <path
         style="fill:#333333;stroke:#000000;stroke-width:0.623622;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
         d="M 1.2425291,19.796116 H 22.757471"
         id="path2546-6" />
      <path
         style="fill:#333333;stroke:#000000;stroke-width:0.623622;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
         d="M 1.2425292,11.972501 H 22.757471"
         id="path2546-3" />
    </g>
</svg> */
}
