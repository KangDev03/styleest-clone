import SectionTitle from "@/components/ui/section-title";

export default function About() {
  return (
    <section className="py-15 md:py-20 lg:py-25 px-6 md:px-15 lg:px-33">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">
          <div>
            <SectionTitle className="text-center md:text-left lg:text-left">(About us)</SectionTitle>
          </div>

          <div className="mt-6">
            <h1 className="text-center md:text-left lg:text-left md:text-primary lg:text-muted font-bold text-2xl md:text-3.5xl lg:text-5xl leading-8.5 md:leading-11 lg:leading-17">
              <span className="text-primary">
                We believe that style is a powerful form of self-expression. Our journey began with a simple yet {" "}
              </span>
              profound vision – to curate a diverse collection of fashion-forward pieces that empower individuals to embrace their uniqueness.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
