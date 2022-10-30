import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  const allData = [
    {
      image: "/favicon/favicon-32x32.png",
      imagaAlt: "Image",
      heading: "Discuss with us",
      ctaLink: "/lets-talk",
    },
    {
      image: "/favicon/favicon-32x32.png",
      imagaAlt: "Image",
      heading: "Adding Value & Design",
      ctaLink: "/lets-talk",
    },
    {
      image: "/favicon/favicon-32x32.png",
      imagaAlt: "Image",
      heading: "Release the Brand",
      ctaLink: "/lets-talk",
    },
  ];
  return (
    <div className=" bg-gray-100 flex flex-col min-h-[40vh] justify-center space-y-10 text-center ">
      <div className="container mx-auto">
        <div className="font-bold text-xl mb-2">How we work</div>
        <div className="flex flex-row gap-4 justify-between ">
          {allData.map((data, index) => {
            return (
              <div
                key={index}
                className="max-w-sm h-[250px] flex items-center font-bold text-xl mb-2 bg-white rounded overflow-hidden shadow-lg px-6 py-4"
              >
                <Link
                  className="text-2xl row-start-3 col-start-1 m-4"
                  href={data.ctaLink}
                >
                  {data.heading}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
