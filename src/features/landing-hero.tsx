import Button from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-97.5 md:pt-39 lg:pt-39 px-6 md:px-15 lg:px-33 h-full">
      <div className="flex flex-col-reverse md:flex-col lg:flex-col items-center justify-center gap-4 md:gap-20 lg:gap-20">

        <div className="w-full text-background hidden md:hidden lg:flex flex-col gap-4 ">
          <div className="flex justify-end">
            <h1 className="w-72 text-3.5xl font-bold leading-11 text-right">Crafting stories with every stitch</h1>
          </div>
          <div className="flex justify-end">
            <p className="w-72 text-lg font-medium leading-7 text-right">Where every stitch tells a story, and every accessory unveils a new chapter of style.</p>
          </div>
        </div>

        <div className="w-full h-min flex flex-col md:flex-row lg:flex-row items-center md:items-end lg:items-end md:justify-between lg:justify-between gap-9 md:gap-0 lg:gap-0 z-1 md:mt-68 lg:mt-0">
          <div className="text-background flex flex-col items-center justify-center gap-4">
            <h1 className="w-full text-center md:text-left lg:text-left md:w-101 lg:w-101 text-2xl md:text-2.5xl lg:text-3.5xl font-bold leading-8.5 md:leading-10 lg:leading-11">Special project by STYLEEST</h1>
            <p className="w-full text-center md:text-left lg:text-left md:w-101 lg:w-101 text-base lg:text-lg font-medium leading-6.5 lg:leading-7">This isn&apos;t just a collection, it&apos;s a manifestation of creativity, innovation, and a bold redefinition of contemporary style.</p>
          </div>
          <div className="w-46 h-auto z-1">
            <Button size="large">See Collection</Button>
          </div>
        </div>

        <div className="relative md:-bottom-11 lg:bottom-25 z-0">
          <h1 className="text-background text-[82px] md:text-[154px] lg:text-[284px] font-bold leading-22.5 md:leading-42 lg:leading-78 text-center break-all text-nowrap">Bletzertt</h1>
        </div>

      </div>
    </section>
  )
}
