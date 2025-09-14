import Button from "@/components/ui/button";

export default function CTASection() {

  return (
    <section className="bg-[url(/images/cta.png)] py-15 px-6 md:py-20 md:px-15 lg:py-29 lg:px-33">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-inverted">
          <h1 className="text-2.5xl md:text-4.5xl lg:text-7xl font-bold leading-8 md:leading-11.5 lg:leading-21.5 text-center mb-6 md:mb-8">Take the next step with our exclusive collections</h1>
          <p className="text-base lg:text-lg font-medium leading-7 text-center mb-8 md:mb-14">Take the next step in your style journey and discover the allure of our meticulously crafted, exclusive collections.</p>
          <div className="w-full flex justify-center">
            <Button size="large">Shop Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}