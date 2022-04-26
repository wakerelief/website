import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../media";
import Image from 'next/image'


const carouselContent = [
  {
    header: 'Who We Are', content: 'We are Wake Relief, an all-volunteer run organization.  We do not have a paid administrator.  Our funding comes from grants and donations from individuals. With the exception of incidentals and rent, money goes to the purchase of food for our shelves. Additional food is supplemented by Interfaith Food Shuttle and food drives.'
  },
  {
    header: 'Who Helps Us', content: 'Who helps us and runs Wake Relief is our many dedicated volunteers! Volunteers sign up to serve assigned year round monthly shifts. Each shift serves those in need by packing bags of food based on family size, restocking the shelves, and distributing groceries to clients and helping carry groceries to cars, if needed.  The day chair assigned to the shift records clients in our database.'
  },
  {
    header: 'How You Can Help', content: 'How can you help is to volunteer, organize a food drive, or make a donation. Contact us by leaving a message for Wake Relief on the phone number listed. Want to organize a food drive? Here is a list of the foods we provide: canned tuna and chicken, canned lunch meat, canned peas, green beans, corn, mixed vegetables, soup, beans, peanut butter, fruit, oil, boxed milk, rice, grits, pasta, canned tomato products, as well as, toilet paper, soap, and detergent pods. (Please no glass containers) Our clients also enjoy receiving personal hygiene products, and various condiments when we have them available through donations.'
  }
]

const EmblaCarousel = ({ slides }: { slides: any }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
    startIndex: 1
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index: number) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <Image
                  className="embla__slide__img"
                  src={mediaByIndex(index).src}
                  alt="Wake Relief Help"
                />
              </div>
              <div className={'slide-content'}>
                <h2>{carouselContent[index].header}</h2>
                <p>{carouselContent[index].content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;


