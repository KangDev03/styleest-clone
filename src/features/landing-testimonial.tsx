import { useState } from "react";

import SectionSubTitle from "@/components/ui/section-subtitle";

import ArrowButton from "@/assets/icons/arrow-button";
import QuoteIcon from "@/assets/icons/quote-icon";
import testimonial from "@/data/testimonial.json";

interface Testimonial {
  imageUrl: string;
  title: string;
  content: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col items-center md:grid grid-cols-2 lg:flex lg:flex-row md:gap-21 lg:gap-31">

      {/* <div className="w-full md:aspect-video lg:aspect-[486/412]">
        <img
          src={testimonial.imageUrl}
          alt={testimonial.authorName}
          className="w-full h-full object-cover object-center"
        />
      </div> */}

      <div className="w-full hidden md:block lg:block">
        <img
          src={testimonial.imageUrl}
          alt={testimonial.authorName}
          className="md:w-full md:h-[436px] w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-105 md:w-full lg:w-full flex flex-col justify-center relative">
        <QuoteIcon className="absolute left-1/2 md:left-0 lg:left-0 -translate-x-1/2 md:translate-0 lg:translate-0 md:top-5 lg:-top-25 w-25 lg:w-37 h-auto opacity-10 rotate-180" />

        <h3 className="text-secondary text-center md:text-left lg:text-left text-xl md:text-2xl lg:text-3.5xl font-bold leading-8 md:leading-9.5 lg:leading-12.5 mb-4 md:mb-6 lg:mb-6">
          {testimonial.title}
        </h3>
        <p className="text-secondary text-center md:text-left lg:text-left text-base lg:text-xl font-medium leading-6 lg:leading-8 mb-8 md:mb-6 lg:mb-10">
          “{testimonial.content}“
        </p>

        <div className="flex items-center gap-3">
          <img
            src={testimonial.authorAvatar}
            alt={testimonial.authorName}
            className="size-12 lg:size-14 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="text-base lg:text-xl font-medium md:leading-6 lg:leading-8">{testimonial.authorName}</p>
            <p className="text-sm font-medium leading-5.5 text-tertiary">{testimonial.authorRole}</p>
          </div>
          <div className="block md:hidden lg:hidden size-12 ml-auto">
            <img
              src={testimonial.imageUrl}
              alt={testimonial.authorName}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + testimonial.length) % testimonial.length);
  const next = () => setIndex((i) => (i + 1) % testimonial.length);

  const goTo = (i: number) => setIndex(i);

  return (
    <section className="max-w-screen-xl mx-auto py-15 px-6 md:py-20 md:px-15 lg:py-25 lg:px-10">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full relative">

          <div className="w-full flex flex-row justify-center md:justify-between lg:justify-between mb-15">
            <SectionSubTitle className="!mt-0">What our customer says</SectionSubTitle>
            <div className="hidden md:flex lg:flex flex-row gap-6 items-center justify-center">
              <button
                onClick={prev}
                className="rotate-180 cursor-pointer active:scale-90 transition-transform duration-200"
              >
                <ArrowButton className="md:size-10.25 lg:size-13.75 opacity-50" />
              </button>
              <button
                onClick={next}
                className="cursor-pointer active:scale-90 transition-transform duration-200"
              >
                <ArrowButton className="md:size-10.25 lg:size-13.75" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonial.map((item, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <TestimonialCard testimonial={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 absolute left-1/2 -translate-x-1/2 mt-8">
            {testimonial.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${i === index ? "bg-black" : "bg-secondary opacity-70"
                  }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
