'use client'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1254 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1254, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

type Props = {
  children: React.ReactNode
}

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel infinite autoPlay responsive={responsive}>
      {children}
    </Carousel>
  );
}

