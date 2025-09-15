import Button from "@/components/ui/button";

export default function BannerSection() {
  return (
    <div className="bg-[url(/images/banner.png)] relative w-full h-[800px] bg-cover bg-center bg-no-repeat z-5 overflow-hidden">
      <div className="max-w-screen-xl mx-auto md:pb-15 lg:px-10 h-full flex items-end">
        <div className="flex flex-col items-center md:flex-row md:items-center lg:flex-row lg:items-end gap-6 lg:gap-27">
          <h1 className="max-w-198 text-inverted text-center text-2.5xl leading-8.5 md:text-left md:text-4.5xl md:leading-11.5 lg:text-left lg:text-7xl lg:leading-21.5">Get everyting you need for your fashion look and life style</h1>
          <div className="flex flex-col items-center justify-center md:items-end md:justify-end lg:items-end lg:justify-end gap-8">
            <p className="text-inverted font-medium text-center text-base md:text-right lg:text-right leading-6.5 lg:text-lg lg:leading-7">Find everything you need for your perfect fashion statement.</p>
            <Button size="large">Explore More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
