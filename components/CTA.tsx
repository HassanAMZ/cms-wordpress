import Link from "next/link";
import { M_PLUS_Rounded_1c } from "@next/font/google";
const mPlusRounded1C700 = M_PLUS_Rounded_1c({ weight: "700" });

export default function CTA() {
  return (
    <div className="w-[450px]  border-gray-900 border-2 bg-gray-100">
      <div className="font-semibold p-4 border-b-2 border-gray-900 flex justify-between">
        <div>Branding</div>
        <div>{"o o o"}</div>
      </div>
      <div className="px-4 py-6 space-y-4 flex flex-col jusitfy-center">
        <h1
          className={`leading-10 text-4xl tracking-tighter ${mPlusRounded1C700.className}`}
        >
          Add value on your brand to make your product closer to your customers.
        </h1>
        <div className="text-md text-gray-700">
          We are ready to help you crafting packages branding for your products
          accoruding to your atrget amrkets. we helped more tha 1000 products in
          United staes.
        </div>
      </div>
      <div className="font-semibold text-xl p-4 border-t-2 border-gray-900 flex justify-between">
        <Link href="/lets-talk">Let's Talk</Link>
        <Link href="/lets-talk">{"->"}</Link>
      </div>
    </div>
  );
}
