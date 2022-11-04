import Link from "next/link";
import { M_PLUS_Rounded_1c } from "@next/font/google";
const mPlusRounded1C700 = M_PLUS_Rounded_1c({ weight: "700" });

export default function SingleBlogCard({
  title,
  imageURL,
  slug,
  authorName,
  link,
  postDate,
  blogURL,
}) {
  // console.log(title, imageURL, slug, authorName, link, postDate);
  return (
    <div className="border-gray-900 md:border-2 bg-gray-100">
      <div className="font-semibold p-4 border-b-2 border-gray-900 md:flex hidden justify-between">
        <div>{authorName}</div>
        <div>{"o o o"}</div>
      </div>
      <div className="px-4 py-6 space-y-4 flex flex-col jusitfy-center">
        <h1
          className={`leading-10 text-4xl tracking-tighter ${mPlusRounded1C700.className}`}
        >
          {title}
        </h1>
        <div className="text-md text-gray-700">{title}</div>
      </div>
      <Link href={blogURL}>
        <div className="font-semibold text-xl p-4 border-t-2 border-gray-900 flex justify-between hover:bg-gray-100 hover:text-gray-900 bg-teal-100 text-gray-900">
          <div>{title}</div>
          <div>{slug}</div>
        </div>
      </Link>
    </div>
  );
}
