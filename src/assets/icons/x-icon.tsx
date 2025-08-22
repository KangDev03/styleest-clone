import type { SVGProps } from "react"
import type { JSX } from "react/jsx-runtime"

const XIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="#FFF"
    style={{
      display: 'inline-block',
      flexShrink: 0,
    }}
    className="w-full h-full fill-inverted group-hover:fill-primary duration-300"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
)
export default XIcon
