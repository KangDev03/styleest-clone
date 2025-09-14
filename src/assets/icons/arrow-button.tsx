import type { SVGProps } from "react"
import type { JSX } from "react/jsx-runtime"

const ArrowButton = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 54 54"
    {...props}
  >
    <rect width="98%" height="98%" x={0.5} y={0.5} stroke="#191919" rx={27}/>
    <path
      fill="#191919"
      fillRule="evenodd"
      d="M20.792 28.538h9.746l-3.43 3.727 1.35 1.464 5.75-6.23-5.75-6.228-1.35 1.463 3.43 3.728h-9.746v2.076z"
      clipRule="evenodd"
    />
  </svg>
)
export default ArrowButton
