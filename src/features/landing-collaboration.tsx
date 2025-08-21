import Link from "@/components/ui/link";

export default function CollaborationSection() {
  return (
    <div className="bg-background-alt">

      {/* Collaboration 1 Section */}
      <section className="py-25 px-33">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full flex flex-row gap-32 relative">

            <div className="max-w-122 w-full">
              <img
                src="/images/collaboration1-1.png"
                alt="collaboration1"
                className="w-full h-auto object-cover aspect-auto"
              />
            </div>

            <div className="w-full flex flex-col justify-end pb-14">
              <div className="max-w-96 w-full absolute -top-44 right-0">
                <img
                  src="/images/collaboration1-2.png"
                  alt="collaboration1"
                  className="w-full h-auto object-cover aspect-auto"
                />
              </div>

              <div>
                <div>
                  <h3 className="text-primary text-3.5xl font-bold leading-11">STYLEEST collaborates with TAYSON</h3>
                </div>

                <div className="mt-6 w-full">
                  <p className="text-secondary text-lg font-medium leading-7">The collection is comprised of hoodies, jerseys, shorts and accessories that feature the parisian club’s branding overlaid by CRASH’s vibrant aesthetic. </p>
                </div>

                <Link className="mt-8">See Collection</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Collaboration 2 Section */}
      <section className="w-full h-min py-27 px-33 bg-background-alt relative z-2">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full flex flex-row gap-32">

            <div className="w-full flex flex-col justify-start pt-14 relative">
              <div>
                <div>
                  <h3 className="text-primary text-3.5xl font-bold leading-11">STYLEEST collaborates with COUTU</h3>
                </div>

                <div className="mt-6">
                  <p className="text-secondary text-lg font-medium leading-7">This exclusive partnership brings together two fashion powerhouses, combining Styleest&apos;s curated sophistication with Coutu&apos;s avant-garde designs.</p>
                </div>

                <Link className="mt-8">See Collection</Link>
              </div>

              <div className="max-w-96 w-full absolute left-0 -bottom-27">
                <img
                  src="/images/collaboration2-2.png"
                  alt="collaboration1"
                  className="w-full h-auto object-cover aspect-auto"
                />
              </div>
            </div>

            <div className="max-w-122 w-full">
              <img
                src="/images/collaboration2-1.png"
                alt="collaboration1"
                className="w-full h-auto object-cover aspect-auto"
              />
            </div>

          </div>
        </div>

        <div className="bg-background w-full h-42 absolute left-0 bottom-0 -z-1"></div>
      </section>
    </div>

  )
}
