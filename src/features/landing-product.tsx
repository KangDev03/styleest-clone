import Link from "@/components/ui/link";
import SectionSubTitle from "@/components/ui/section-subtitle";
import SectionTitle from "@/components/ui/section-title";

export default function ProductSection() {
  return (
    <section className="py-30 px-33">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="max-w-[1200px] w-full">

          <div className="flex flex-col items-center">
            <SectionTitle>(New Arrival)</SectionTitle>
            <div className="mt-6">
              <SectionSubTitle>Explore our latest fashion arrivals</SectionSubTitle>
            </div>
          </div>

          <div className="mt-6 flex flex-row items-center justify-between">
            <p className="text-tertiary font-bold leading-5 tracking-wider">100 items</p>
            <Link>See All Items</Link>
          </div>

          <div>

            {/* product Card */}
            <div>
              <div>
                <img src="" alt="" />
              </div>

              <div>
                <h4>Printed Longslaves T-Shirt</h4>
                <p>15.99 USD</p>
                <div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
