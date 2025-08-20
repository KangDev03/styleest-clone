import Button from "@/components/ui/button";

export default function Header() {
  return (
    <header className="py-4 px-33 border-b border-[#ffffff99]">
      <div className="container mx-auto flex items-center justify-center">
        <div className="max-w-[1200px] w-full flex items-center justify-between">

          <h1 className="w-[280px] text-inverted uppercase text-2xl leading-7 tracking-wide cursor-pointer">styleest</h1>

          <div className="flex items-start justify-start gap-9">
            <h3 className="font-space-grotesk text-inverted hover:text-primary text-center uppercase font-medium leading-5 tracking-wide duration-300 cursor-pointer">About us</h3>
            <h3 className="font-space-grotesk text-inverted hover:text-primary text-center uppercase font-medium leading-5 tracking-wide duration-300 cursor-pointer">Collaboration</h3>
            <h3 className="font-space-grotesk text-inverted hover:text-primary text-center uppercase font-medium leading-5 tracking-wide duration-300 cursor-pointer">Product</h3>
            <h3 className="font-space-grotesk text-inverted hover:text-primary text-center uppercase font-medium leading-5 tracking-wide duration-300 cursor-pointer">Articles</h3>
          </div>

          <div className="flex items-center justify-start gap-5">
            <div className="group w-10 h-10 flex items-center justify-center text-xs gap-2.5 backdrop-blur-[10px] p-2 rounded-full bg-icon cursor-pointer hover:bg-inverted duration-400">
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  color="rgb(255, 255, 255)"
                  style={{
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                  className="w-full h-full fill-inverted group-hover:fill-primary duration-300"
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </div>
            </div>

            <div className="group w-10 h-10 flex items-center justify-center text-xs gap-2.5 backdrop-blur-[10px] p-2 rounded-full bg-icon cursor-pointer hover:bg-inverted duration-300">
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  color="rgb(255, 255, 255)"
                  style={{
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                  className="w-full h-full fill-inverted group-hover:fill-primary duration-300"
                >
                  <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"></path>
                </svg>
              </div>
            </div>
            <div className="w-35 h-auto">
              <Button>Login</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
