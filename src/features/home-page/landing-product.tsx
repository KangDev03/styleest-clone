import Link from "@/components/ui/link";
import type { Product } from "@/components/ui/product-card";
import ProductCard from "@/components/ui/product-card";
import SectionSubTitle from "@/components/ui/section-subtitle";
import SectionTitle from "@/components/ui/section-title";

import products from "@/data/product.json";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function ProductSection() {
  const breakpoint = useBreakpoint();

  return (
    <section className="max-w-screen-xl mx-auto py-15 px-6 md:py-20 md:px-15 lg:py-30 lg:px-10">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">

          <div className="flex flex-col items-center">
            <SectionTitle>(New Arrival)</SectionTitle>
            <SectionSubTitle>Explore our latest fashion arrivals</SectionSubTitle>
          </div>

          <div className="mt-6 flex flex-row items-center justify-between">
            <p className="text-tertiary font-bold leading-5 tracking-wider">100 items</p>
            <Link>See All Items</Link>
          </div>

          <div className="mt-8 flex flex-row md:grid md:grid-cols-3 md:grid-rows-2 lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide ">
            {breakpoint === "md" ?
              products.slice(0, 6).map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              )) : (breakpoint === "lg" ? (
                products.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                products.map((product: Product) => (
                  <div key={product.id} className="snap-start shrink-0 w-64">
                    <ProductCard product={product} />
                  </div>
                ))
              ))}
          </div>

        </div>
      </div>
    </section>
  )
}
