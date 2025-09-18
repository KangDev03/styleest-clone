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
      <div className="bg-[url(/images/hero-mobile.jpg)] md:bg-[url(/images/hero-image.png)] relative w-full h-[800px] bg-cover bg-center md:bg-[position:30%_50%] z-5 overflow-hidden">
        <Header />
        {/* <div className="bg-[#ffffff99] h-0.25 w-full z-10 absolute top-6"></div> */}
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