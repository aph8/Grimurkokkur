// src/app/head.tsx
import humarsupa from '../../public/humarsupa_portrait.jpg';
import fiskibollur from '../../public/fiskibollur_portrait.jpg';
import fiskistangir from '../../public/fiskistangir_portrait.jpg';
import plokkfiskur from '../../public/plokkfiskur_portrait.jpg';
/**
 * Injects preload links and critical CSS in the head.
 */

export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* ===== HeroSection.module.scss (Desktop Hero) ===== */
            .HeroSection_hero__5yfb5 {
              position: relative;
              height: 100vh;
              display: flex;
              overflow: hidden;
            }
            .HeroSection_panel__l3t_w {
              position: relative;
              flex: 1;
              z-index: 1;
            }
            .HeroSection_panel__l3t_w + .HeroSection_panel__l3t_w {
              margin-left: -5%;
            }
            .HeroSection_panel1__vzF6g {
              background-color: #111;
            }
            .HeroSection_overlayContent__Br9lV {
              position: absolute;
              top: 1.5rem;
              left: 1.5rem;
              z-index: 10;
              color: white;
            }
            .HeroSection_overlayContent__Br9lV h1 {
              font-size: clamp(1.5rem, 4vw, 2.5rem);
              letter-spacing: 0.1em;
              margin: 0;
              background: rgba(0, 0, 0, 0.5);
              padding: 0.2em 0.4em;
              border-radius: 4px;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
            }

            /* ===== HeroCarousel.module.scss (Mobile Carousel) ===== */
            .HeroCarousel_carouselWrapper__IxtcD {
              position: relative;
              overflow: hidden;
              width: 100%;
              aspect-ratio: 20 / 30;
            }
            .HeroCarousel_slides__7gJQk {
              position: relative;
              height: 100%;
            }
            .HeroCarousel_slide__n9ZBp {
              position: absolute;
              inset: 0;
              opacity: 0;
              transition: opacity 1s ease;
            }
            .HeroCarousel_overlayContent__3K8Gu {
              position: absolute;
              top: 1.5rem;
              left: 1.5rem;
              z-index: 10;
              color: white;
            }
            .HeroCarousel_overlayContent__3K8Gu h1 {
              font-size: clamp(1.5rem, 4vw, 2.5rem);
              letter-spacing: 0.1em;
              margin: 0;
              background: rgba(0, 0, 0, 0.5);
              padding: 0.2em 0.4em;
              border-radius: 4px;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
            }
          `,
        }}
      />

      <link rel="preload" as="image" href={humarsupa.src} media="(min-width: 769px)" />
      <link rel="preload" as="image" href={fiskibollur.src} media="(min-width: 769px)" />
      <link rel="preload" as="image" href={fiskistangir.src} media="(min-width: 769px)" />
      <link rel="preload" as="image" href={plokkfiskur.src} media="(min-width: 769px)" />
    </>
  );
}
