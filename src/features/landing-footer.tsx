import FacebookIcon from "@/assets/icons/social/facebook";
import InstagramIcon from "@/assets/icons/social/instagram";
import LinkedInIcon from "@/assets/icons/social/linkedIn";
import XIcon from "@/assets/icons/social/x";
import categories from "@/data/categories.json";
import { NavItem } from "@/features/landing-header";

export default function Footer() {

  return (
    <>
      <footer className=" text-inverted w-full">
        <div className="max-w-screen-xl mx-auto py-15 px-6 md:py-16 md:px-15 lg:pt-16 lg:pb-15 lg:px-10">
          <div className="flex flex-col items-center justify-center">

            <div className="flex flex-col lg:flex-row gap-8.5 lg:gap-88">
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-[42px] font-bold leading-12.5 tracking-[0.84px] uppercase mb-6">STYLEEST</h2>
                <p className="text-muted text-base md:text-lg leading-7 mb-6 text-center lg:text-left">
                  Welcome to Styleest, where your fashion journey finds its perfect abode.
                  Dive into a curated haven of style, where every piece tells a story of
                  sophistication and contemporary allure.
                </p>

                <div className="flex space-x-4 text-muted">
                  <XIcon className="w-3.5 h-3.5" />
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <FacebookIcon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between lg:justify-start gap-y-8 md:gap-0 lg:gap-14 mt-0 lg:mt-9.75">
                <div>
                  <h3 className="text-xl font-bold mb-8 md:mb-4 text-center lg:text-left">Shop</h3>
                  <ul className="space-y-4 text-sm opacity-80">
                    {categories.map((cat, index) => (
                      <p key={index} className="text-base font-medium leading-6 tracking-wider text-center lg:text-left">{cat.title}</p>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-8 md:mb-4 text-center lg:text-left">Explore</h3>
                  <ul className="space-y-4 text-sm opacity-80">
                    {NavItem.map((item, index) => (
                      <p key={index} className="text-base font-medium leading-6 tracking-wider text-center lg:text-left">
                        {item}
                      </p>
                    ))}
                  </ul>
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <h3 className="text-xl font-bold mb-4 text-center lg:text-left">Contact</h3>
                  <ul className="space-y-4 text-sm opacity-80">
                    <li><p className="text-base font-medium leading-6 tracking-wider text-center lg:text-left">contact@styleest.com</p></li>
                    <li>
                      <p className="text-base font-medium leading-6 tracking-wider text-center lg:text-left">
                        2972 Westheimer Rd.<br className="hidden md:block" />
                        Santa Ana, Illinois 85486
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="text-muted border-t border-[#474747]">
        <div className="max-w-screen-xl mx-auto pt-7 pb-4 md:pt-12 md:pb-9 px-6 md:px-15 lg:pt-9 lg:pb-6 lg:px-10 flex flex-col lg:flex-row items-center lg:justify-between text-xs">
          <p className="text-sm font-medium leading-5.5 text-center">Copyright© 2023. Agensip Creative Agency. All Right Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <p className="text-sm font-medium leading-5.5">Terms of Service</p>
            <p className="text-sm font-medium leading-5.5">Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  )
}
