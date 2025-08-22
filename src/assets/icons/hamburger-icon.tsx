import type { SVGProps } from "react"
import type { JSX } from "react/jsx-runtime"

const HamburgerIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
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
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
)
export default HamburgerIcon