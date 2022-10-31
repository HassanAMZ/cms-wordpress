import { M_PLUS_Rounded_1c } from "@next/font/google";
import Link from "next/link";
const mPlusRounded1C700 = M_PLUS_Rounded_1c({ weight: "700" });

export default function PreviousClients() {
  const clients = [
    {
      ClientName: "Dayli Official",
      ClientSiteLink: "https://dayliofficial.com",
    },
    {
      ClientName: "Krishna Jewellers",
      ClientSiteLink: "http://krishnajewellers.com/",
    },
    {
      ClientName: "Flourish Beauty Lab",
      ClientSiteLink: "https://flourishbeautylab.com/",
    },
    {
      ClientName: "Comrade",
      ClientSiteLink: "https://cmrd.com/",
    },
  ];
  return (
    <div className="bg-gray-900 text-gray-100">
      <div className=" container mx-auto ">
        <div className="grid grid-cols-4 md:px-10 py-10 ">
          {clients.map((client, index) => {
            return (
              <Link
                key={index}
                target="_blank"
                className="line-clamp-1 self-center text-center justify-self-center"
                href={client.ClientSiteLink}
              >
                {client.ClientName}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
