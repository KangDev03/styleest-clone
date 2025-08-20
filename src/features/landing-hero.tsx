import Button from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-19 px-33 h-full">
      <div className="container mx-auto flex flex-col items-center justify-center gap-20">

        <div className="max-w-[1200px] w-full text-background flex flex-col gap-4">
          <div className="flex justify-end">
            <h1 className="w-72 text-3.5xl font-bold leading-11 text-right">Crafting stories with every stitch</h1>
          </div>
          <div className="flex justify-end">
            <p className="w-72 text-lg font-medium leading-7 text-right">Where every stitch tells a story, and every accessory unveils a new chapter of style.</p>
          </div>
        </div>

        <div className="max-w-[1200px] w-full h-min flex items-end justify-between z-1">
          <div className="text-background flex flex-col gap-4">
            <h1 className="w-101 text-3.5xl font-bold leading-11">Special project by STYLEEST</h1>
            <p className="w-101 text-lg font-medium leading-7">This isn&apos;t just a collection, it&apos;s a manifestation of creativity, innovation, and a bold redefinition of contemporary style.</p>
          </div>
          <div className="w-46 h-auto z-1">
            <Button size="large">See Collection</Button>
          </div>
        </div>

        <div className="relative bottom-25 z-0">
          <h1 className="text-background text-[284px] font-bold leading-78 text-center break-all text-nowrap">Bletzertt</h1>
        </div>

      </div>
    </section>
  )
}
