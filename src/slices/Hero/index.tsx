import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink relative overflow-hidden h-dvh text-zinc-800 bg-texture"
    >

      <div className="grid absolute inset-0 mx-auto mt-24 max-w-4xl grid-rows-2 place-items-end px-6 ~py-10/16">
      <Heading size="lg" className ="realtive max-w-2xl place-self-start">

      <PrismicText field={slice.primary.heading} /> 

      </Heading>
      </div>

      <PrismicRichText field={slice.primary.body} />
      <PrismicNextLink field={slice.primary.button} />
    </Bounded>
  );
};

export default Hero;
