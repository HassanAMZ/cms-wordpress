import { M_PLUS_Rounded_1c } from "@next/font/google";
import Link from "next/link";
const mPlusRounded1C700 = M_PLUS_Rounded_1c({ weight: "700" });

export default function PreviousClients({ clients }) {
  return (
    <div className="flex justify-between p-10">
      {clients.map((client, index) => {
        return (
          <div>
            <Link target="_blank" href={client.ClientSiteLink}>
              {client.ClientName}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
