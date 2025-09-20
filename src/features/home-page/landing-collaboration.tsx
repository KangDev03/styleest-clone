import Link from "@/components/ui/link";

export default function CollaborationSection() {
  return (
    <div className="bg-background-alt">

      {/* Collaboration 1 Section */}
      <section className="max-w-screen-xl mx-auto py-15 px-6 md:pt-35 lg:pt-25 md:pb-20 lg:pb-25 md:px-15 lg:px-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-col md:flex-row lg:flex-row gap-17 md:gap-22 lg:gap-32 relative">

            <img
              src="/images/avif/collaboration/collaboration1-1.avif"
              alt="collaboration1"
              className="w-full h-78 md:w-56 md:h-69 lg:w-122 lg:h-150 max-w-full object-cover object-top md:object-center lg:object-center"
            />

            <div className="w-fit flex flex-col justify-end md:pb-5 lg:pb-14">
              <img
                src="/images/avif/collaboration/collaboration1-2.avif"
                alt="collaboration1"
                className="w-40 md:w-56 lg:w-96 h-30 md:h-41 lg:h-82 max-w-full object-cover md:object-fill lg:object-cover absolute top-58 md:-top-50 lg:-top-44 right-0"
              />

              <div className="flex md:block lg:block flex-col justify-center items-center">
                <h3 className="text-primary text-xl lg:text-3.5xl font-bold leading-7 lg:leading-11">STYLEEST collaborates with TAYSON</h3>

                <div className="mt-4 md:mt-6 lg:mt-6 w-full">
                  <p className="text-secondary text-base text-center md:text-left lg:text-left lg:text-lg font-medium leading-6 lg:leading-7">The collection is comprised of hoodies, jerseys, shorts and accessories that feature the parisian club’s branding overlaid by CRASH’s vibrant aesthetic. </p>
                </div>

                <Link className="mt-6 md:mt-8 lg:mt-8">See Collection</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Collaboration 2 Section */}
      <section className="max-w-screen-xl mx-auto py-15 px-6 md:pt-20 md:pb-43 md:px-15 lg:py-27 lg:px-10 relative z-2">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row gap-17 md:gap-22 lg:gap-32">

            <div className="w-full flex flex-col justify-start md:pt-5 lg:pt-14 relative">
              <div className="flex md:block lg:block flex-col justify-center items-center">
                <div>
                  <h3 className="text-primary text-xl lg:text-3.5xl font-bold leading-7 lg:leading-11">STYLEEST collaborates with COUTU</h3>
                </div>

                <div className="mt-4 md:mt-6 lg:mt-6 w-full">
                  <p className="text-secondary text-base text-center md:text-left lg:text-left lg:text-lg font-medium leading-6 lg:leading-7">This exclusive partnership brings together two fashion powerhouses, combining Styleest&apos;s curated sophistication with Coutu&apos;s avant-garde designs.</p>
                </div>

                <Link className="mt-6 md:mt-8 lg:mt-8">See Collection</Link>
              </div>

              <img
                src="/images/avif/collaboration/collaboration2-2.avif"
                alt="collaboration2"
                className="w-40 md:w-56 lg:w-96 h-30 md:h-41 lg:h-82 max-w-full object-cover md:object-cover lg:object-contain absolute left-0 -top-37 md:top-auto lg:top-auto md:-bottom-39 lg:-bottom-27"
              />
            </div>

            <img
              src="/images/avif/collaboration/collaboration2-1.avif"
              alt="collaboration2"
              className="w-full h-78 md:w-56 md:h-69 lg:w-122 lg:h-150 max-w-full object-cover object-top md:object-center lg:object-center"
            />

          </div>
        </div>

        <div className="hidden md:block lg:block bg-background w-full md:h-33 lg:h-42 absolute left-0 bottom-0 -z-1"></div>
      </section>
    </div>

  )
}
