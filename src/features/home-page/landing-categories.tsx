import Button from "@/components/ui/button";
import Link from "@/components/ui/link";
import SectionSubTitle from "@/components/ui/section-subtitle";
import SectionTitle from "@/components/ui/section-title";

import categories from "@/data/categories.json";

interface CategoryProps {
  title: string;
  description: string;
  imageUrl: string;
}

function CategoryCardDesktop({ category }: { category: CategoryProps }) {
  return (
    <article className="relative w-full h-full overflow-hidden cursor-pointer group">
      <img
        src={category.imageUrl}
        alt={category.title}
        className="w-full h-full object-cover object-[50%_30%] transition-transform duration-400 group-hover:scale-110 origin-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 text-white transform translate-y-55 group-hover:translate-y-0 transition-all duration-400">
        <h3 className="mb-2.5 text-3.5xl font-bold leading-11">{category.title}</h3>
        <p className="mb-8 text-lg font-medium leading-7">{category.description}</p>
        <Button>Explore More</Button>
      </div>
    </article>
  );
}

function CategoryCardTablet({ category, index }: { category: CategoryProps; index: number }) {
  return (
    <article className={`flex flex-col md:flex-row items-center gap-21 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
    >
      <img
        src={category.imageUrl}
        alt={category.title}
        className="w-full h-55 object-cover"
      />
      <div className="max-w-86">
        <h3 className="text-xl font-bold mb-2.5">{category.title}</h3>
        <p className="mb-6 text-base">{category.description}</p>
        <Link>Explore Now</Link>
      </div>
    </article>
  )
}

function CategoryCardMobile({ category }: { category: CategoryProps }) {
  return (
    <article className="flex flex-col items-center">
      <img
        src={category.imageUrl}
        alt={category.title}
        className="w-96 h-78 object-cover mb-6 object-[50%_30%]"
      />
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xl font-bold mb-2.5">{category.title}</h3>
        <p className="mb-8 text-base font-medium">{category.description}</p>
        <Link>Explore Now</Link>
      </div>
    </article>
  )
}


export default function CategoriesSection() {

  return (
    <section className="max-w-screen-xl mx-auto py-15 px-6 md:py-20 md:px-15 lg:py-30 lg:px-10">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">

          <div className="flex flex-col items-center">
            <SectionTitle>(Categories)</SectionTitle>
            <SectionSubTitle>Curated products</SectionSubTitle>
          </div>

          <div className="mt-15 hidden lg:grid grid-cols-3 grid-rows-2 gap-6">
            <div className="row-span-2 aspect-[3/5]">
              <CategoryCardDesktop category={categories[0]} />
            </div>
            <div className="aspect-[5/4]">
              <CategoryCardDesktop category={categories[1]} />
            </div>
            <div className="col-start-2 row-start-2 aspect-[5/4]">
              <CategoryCardDesktop category={categories[2]} />
            </div>
            <div className="row-span-2 col-start-3 row-start-1 aspect-[3/5]">
              <CategoryCardDesktop category={categories[3]} />
            </div>
          </div>

          <div className="mt-10 hidden md:flex flex-col lg:hidden gap-6">
            {categories.map((cat, index) => (
              <CategoryCardTablet key={index} category={cat} index={index} />
            ))}
          </div>

          <div className="mt-10 flex flex-col md:hidden lg:hidden gap-8">
            {categories.map((cat, index) => (
              <CategoryCardMobile key={index} category={cat} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}