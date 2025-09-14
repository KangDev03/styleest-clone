import Link from "@/components/ui/link";
import SectionSubTitle from "@/components/ui/section-subtitle";
import SectionTitle from "@/components/ui/section-title";

import articles from "@/data/articles.json";

interface ArticleProps {
  title: string;
  postDate: string;
  readingTime: number;
  imageUrl: string;
}

function Article({ article }: { article: ArticleProps }) {
  return (
    <article className="flex flex-col-reverse md:flex-row items-start md:items-center py-0 md:py-6 group cursor-pointer">
      <div className="w-full md:w-86.25 lg:w-full flex flex-col lg:flex-row gap-2.5 lg:gap-21">
        <h3 className="text-xl md:text-2xl font-bold leading-8 md:leading-9.5 flex-1 group-hover:underline decoration-solid">{article.title}</h3>
        <div className="flex flex-row items-start md:items-center gap-5">
          <p className="text-secondary text-base font-medium leading-6.5 tracking-wider">{article.postDate}</p>
          <div className="w-2.5 h-2.5 rounded-full cursor-pointer bg-secondary opacity-10"></div>
          <p className="text-secondary text-base font-medium leading-6.5 tracking-wider">{article.readingTime} min read</p>
        </div>
      </div>
      <div className="w-full md:w-70 h-35 ml-auto lg:ml-18.5 mb-4 md:mb-0 overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110 origin-top"
        />
      </div>
    </article>
  )
}

export default function ArticlesSection() {

  return (
    <section className="bg-background-alt py-15 px-6 md:py-20 md:px-15 lg:py-30 lg:px-33">
      <div className="w-full flex flex-col items-center justify-center">

        <div className="w-full flex flex-row items-end justify-between mb-8">
          <div className="w-full md:w-fit flex flex-col items-center md:block">
            <SectionTitle>(Articles)</SectionTitle>
            <SectionSubTitle>Stay inspired with our blogs</SectionSubTitle>
          </div>
          <Link className="hidden md:block">More Articles</Link>
        </div>
        <div className="w-full">
          {articles.map((article, index) => (
            <div key={index}>
              <Article article={article} />
              {index !== articles.length - 1 && (
                <div className="bg-muted w-full h-0.25 my-5" />
              )}
            </div>
          ))}
        </div>
        <Link className="block md:hidden mt-15">More Articles</Link>
      </div>
    </section>
  )
}