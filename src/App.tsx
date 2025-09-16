import About from "@/features/landing-about"
import ArticlesSection from "@/features/landing-articles"
import BannerSection from "@/features/landing-banner"
import CategoriesSection from "@/features/landing-categories"
import CollaborationSection from "@/features/landing-collaboration"
import CTASection from "@/features/landing-cta"
import Footer from "@/features/landing-footer"
import Header from "@/features/landing-header"
import HeroSection from "@/features/landing-hero"
import ProductSection from "@/features/landing-product"
import TestimonialSection from "@/features/landing-testimonial"

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