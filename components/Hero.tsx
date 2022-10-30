import Link from "next/link";
import CTA from "./CTA";
export default function Hero() {
  const data = {
    header: "Branding",
    headIcon: "o o o",
    headline:
      " Add value on your brand to make your product closer to your customers.",
    caption:
      "We are ready to help you crafting packages branding for your products  accoruding to your atrget amrkets. we helped more tha 1000 products in   United staes.",
    cta: "Let's Talk",
    ctaLink: "/lets-talk",
    ctaIcon: "->",
  };
  return (
    <section className="flex p-10 bg-no-repeat bg-cover bg-[#CAF1EE]">
      <CTA {...data} />
    </section>
  );
}
