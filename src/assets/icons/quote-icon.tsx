import type { SVGProps } from "react"
import type { JSX } from "react/jsx-runtime"

const QuoteIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 100 100"
    {...props}
  >
    <path
      d="M25.4 60.5c-11 0-19.9-9-19.9-20s9-20 20-20 20 9 20 20c0 22.1-17.9 40-40 40 0 0 13.1-4.9 19.9-20zm30.1-20c0-11 9-20 20-20s20 9 20 20c0 22.1-17.9 40-40 40 0 0 13.1-4.9 19.9-20-11 0-19.9-9-19.9-20z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    />
  </svg>
)
export default QuoteIcon
