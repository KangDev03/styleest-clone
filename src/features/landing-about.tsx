export default function About() {
  return (
    <section className="py-25 px-33">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="max-w-[1200px] w-full">
          <div>
            <p className="text-accent font-bold leading-5 tracking-ultrawide uppercase">
              (About us)
            </p>
          </div>

          <div className="mt-6">
            <h1 className="text-muted font-bold text-5xl leading-17">
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
