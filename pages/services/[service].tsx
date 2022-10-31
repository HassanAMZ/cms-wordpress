import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";
import CTA from "../../components/CTA";
import PreviousClients from "../../components/PreviousClients";
import HowWeWork from "../../components/HowWeWork";
import { useRouter } from "next/router";

export default function Services() {
  const router = useRouter();
  const { service } = router.query;
  const data = {
    header: "Service",
    headIcon: "o o o",
    headline:
      "Google tag manager web and server tracking implementation services.",
    caption:
      "Focus on your business while we configure your tracking for you, seemlessly for google analytics 4, facebook pixel, conversion api, tiktok and many more!",
    cta: "Let's Talk",
    ctaLink: "/lets-talk",
    ctaIcon: "->",
  };
  const allData = [
    {
      image: "/favicon/favicon-32x32.png",
      imagaAlt: "Image",
      heading: "Audit",
      caption:
        "We examine your data sources, ensuring that they are reliable and accurate, and we begin designing the data and reports you will need to achieve your objectives.",
      ctaLink: "/lets-talk",
    },
    {
      image: "/favicon/favicon-32x32.png",
      imagaAlt: "Image",
      heading: "Tracking Configuration",
      caption:
        "We begin developing an accurate and practical analytics solution.",
      ctaLink: "/lets-talk",
    },
    {
      image: "/favicon/favicon-32x32.png",
      imagaAlt: "Image",
      heading: "Reporting & Dashboard",
      caption:
        "Now that you have reliable data at your disposal, it's time to draw insightful conclusions from it. We advise you on the most effective ways to visualise your data so that it can spur change inside your company.",
      ctaLink: "/lets-talk",
    },
  ];
  return (
    <Layout>
      <Head>
        <title> Services- Shahzada Ali Hassan</title>
      </Head>
      <section className="flex flex-col sm:p-10 bg-no-repeat bg-cover bg-blue-200">
        <div className="container mx-auto ">
          <CTA {...data} />
        </div>
      </section>

      <PreviousClients />
      <HowWeWork allData={allData} />
    </Layout>
  );
}
