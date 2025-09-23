import About from "@/features/home-page/landing-about"
import ArticlesSection from "@/features/home-page/landing-articles"
import BannerSection from "@/features/home-page/landing-banner"
import CategoriesSection from "@/features/home-page/landing-categories"
import CollaborationSection from "@/features/home-page/landing-collaboration"
import CTASection from "@/features/home-page/landing-cta"
import Footer from "@/features/home-page/landing-footer"
import Header from "@/features/home-page/landing-header"
import HeroSection from "@/features/home-page/landing-hero"
import ProductSection from "@/features/home-page/landing-product"
import TestimonialSection from "@/features/home-page/landing-testimonial"

function App() {
  return (
    <div className="min-h-screen flex-col">
      {/* <div className="bg-[url(/images/hero-mobile.jpg)] md:bg-[url(/images/hero-image.png)] relative w-full h-[800px] bg-cover bg-center md:bg-[position:30%_50%] z-5 overflow-hidden">
        <Header />
        <HeroSection />
      </div> */}
      <div className="relative w-full h-[800px] z-5 overflow-hidden">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/avif/hero.avif"
          />
          <img
            src="/images/avif/hero-mobile.avif"
            alt="STYLEEST Special project"
            fetchPriority="high"
            loading="eager"
            className="absolute top-0 left-0 w-full h-full object-cover md:object-[30%_50%]"
          />
        </picture>
        <Header />
        <HeroSection />
      </div>
      <About />
      <CollaborationSection />
      <ProductSection />
      <BannerSection />
      <div className="bg-background-alt">
        <CategoriesSection />
      </div>
      <TestimonialSection />
      <div className="bg-background-alt">
        <ArticlesSection />
      </div>
      <CTASection />
      <div className="bg-primary">
        <Footer />
      </div>
    </div>
  )
}

export default App