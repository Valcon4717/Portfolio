'use client';

import React, { useCallback, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/carousel.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';

const TWEEN_FACTOR_BASE = 0.2;

const Carousel = (props: {
  theme: any;
  slides: number[];
  options?: EmblaOptionsType;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(props.options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi
      .slideNodes()
      .map(
        (slideNode) =>
          slideNode.querySelector(
            '.embla__parallax__layer'
          ) as HTMLElement | null
      )
      .filter((node): node is HTMLElement => node !== null);
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * -tweenFactor.current * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `translateX(${translate}%)`;
          }
          console.log('diffToTarget:', diffToTarget);
          console.log('translate:', translate);
          console.log('tweenNodes:', tweenNodes.current);
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);

    return () => {
      emblaApi
        .off('reInit', setTweenNodes)
        .off('reInit', setTweenFactor)
        .off('reInit', tweenParallax)
        .off('scroll', tweenParallax)
        .off('slideFocus', tweenParallax);
    };
  }, [emblaApi, tweenParallax, setTweenFactor, setTweenNodes]);

  return (
    <div id="carousel" className={`${styles.section} ${props.theme}`}>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {props.slides.map((index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__parallax}>
                  <div className={styles.embla__parallax__layer}>
                    <Image
                      width={500}
                      height={500}
                      className={styles.embla__parallax__img}
                      src={`https://picsum.photos/600/350?v=${index}`}
                      alt="Your alt text"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.embla__buttons}>
          <button className={styles.embla__prev} onClick={scrollPrev}>
            prev
          </button>
          <button className={styles.embla__next} onClick={scrollNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
